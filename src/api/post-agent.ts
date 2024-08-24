"use server";
import {
  notOkResponse,
  okResponse,
  badRequest,
  parseFormData,
  api_urls,
} from "~/api";
import { PostAgentRequest, PostAgentResponse } from "~/api";
import { cookies } from "next/headers";
import { type TApiError, type TResponse } from "~/api/";

/**
 * Post the details of a new agent to the server
 */
export async function postAgent(prevState: TResponse, formData: FormData) {
  const parsedFormData = PostAgentRequest.safeParse(parseFormData(formData));

  // Server-side validation of the form data before sending it to the SpaceTraders API
  if (!parsedFormData.success) {
    return badRequest(
      "Invalid form data: " + parsedFormData.error.message,
      "postAgent",
    );
  }

  // Send the form data to the SpaceTraders API
  const response = await fetch(api_urls.register, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parsedFormData.data),
  });

  // Check if the response from the SpaceTraders API is ok
  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "postAgent");
  }

  // Parse the response from the SpaceTraders API and return it to the client
  const parsedResponse = PostAgentResponse.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "postAgent",
    );
  }

  // unpack the response from the SpaceTraders API
  const data = parsedResponse.data.data;
  // set the AUTHORIZATION cookie to the token from the SpaceTraders API for future requests
  cookies().set("AUTHORIZATION", data.token);
  console.log("[AUTHORIZATION]", data.token);

  // return the response to the client
  return okResponse(data);
}
