"use server";

import {
  notOkResponse,
  okResponse,
  requestOptions,
  type TApiError,
} from "~/api/_utils";
import { type z } from "zod";
import { redirect } from "next/navigation";

/**
 * Fetches a URL and parses the response using the provided schema.
 * If the response is not OK, it will return an error response (TNotOkResponse).
 * If the response is not OK and the user is not authenticated, it will redirect the user to the `/logout` page.
 * If the response is Ok, but the schema fails to parse the response, it will return an error response (TNotOkResponse).
 * If the response is OK, it will return a success response (TOkResponse).
 *
 * @param url - The URL to fetch.
 * @param schema - The schema to parse the response with.
 * @param functionName - The name of the function that is calling this function (for debugging purposes).
 */
export async function fetchAndParse<T extends z.ZodTypeAny>(
  url: string,
  schema: T,
  functionName: string,
) {
  const response = await _fetcher(url, schema, functionName);
  if (!response.success) {
    throw new Error(response.error);
  }

  return response;
}

async function _fetcher<T extends z.ZodTypeAny>(
  url: string,
  schema: T,
  functionName: string,
) {
  const response = await fetch(url, await requestOptions());

  if (!response.ok) {
    // if the user is not authenticated, redirect them to the `/` page
    if (response.status === 401) {
      return redirect("/logout");
    }

    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, functionName);
  }

  const parsedResponse = schema.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      functionName,
    );
  }

  return okResponse(parsedResponse.data as T["_output"]);
}
