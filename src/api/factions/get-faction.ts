"use server";

import { api_urls, notOkResponse, requestOptions, TApiError } from "~/api";
import { GetFactionResponse } from "~/api/factions/get-faction.schema";

export async function getFaction(factionId: string) {
  const response = await fetch(
    api_urls.get_faction(factionId),
    await requestOptions(),
  );

  // Check if the response from the SpaceTraders API is ok
  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "getAgent");
  }

  // Parse the response from the SpaceTraders API to get proper typings
  const parsedResponse = GetFactionResponse.safeParse(await response.json());

  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "getFaction",
    );
  }

  // unpack the response from the SpaceTraders API and return it to the client
  return parsedResponse.data.data;
}
