"use server";
import {
  notOkResponse,
  okResponse,
  requestOptions,
  type TApiError,
} from "~/api/_utils";

import { api_urls } from "~/api/_urls";
import { GetFactionsResponse } from "~/api/factions/get-factions.schema";

/**
 * Get all factions using pagination
 */
export async function getFactions(page = 1, limit = 10) {
  const url = `${api_urls.get_factions}?page=${page}&limit=${limit}`;

  const response = await fetch(url, await requestOptions());

  // Check if the response from the SpaceTraders API is ok
  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "getFactions");
  }

  // Parse the response from the SpaceTraders API to get proper typings
  const parsedResponse = GetFactionsResponse.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "getFactions",
    );
  }

  return okResponse(parsedResponse.data);
}
