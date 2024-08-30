"use server";
import {
  notOkResponse,
  okResponse,
  badRequest,
  parseFormData,
  getStatus,
  api_urls,
  PostAgentRequest,
  PostAgentResponse,
  type TApiError,
  type TResponse,
} from "~/api";
import { cookies } from "next/headers";

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
  const expires = await getExpires();
  cookies().set(api_urls.cookie, data.token, { expires });

  // return the response to the client
  return okResponse(data);
}

/**
 * Get the expiration date for the AUTHORIZATION cookie.
 * Defaults to 3 weeks from the current date or the next server reset.
 * That way if the request fails, the user can still play until the next reset.
 * The API will then let the user know the server reset so they can register again.
 */
async function getExpires() {
  // default expiration date for the AUTHORIZATION cookie is 3 weeks
  let expires = new Date();
  expires.setDate(expires.getDate() + 21);

  // get the current status of the API to determine the next server reset
  const status = await getStatus();
  if (status.success) {
    // `status.data.serverResets.next` will look like: '2024-09-01T16:00:00.000Z'
    // and we need to convert it to look like: 'Wed, 21 Oct 2015 07:28:00 GMT'
    expires = new Date(status.data.serverResets.next);
  }
  return expires;
}
