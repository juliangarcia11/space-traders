"use server";

import { notOkResponse, okResponse, GetStatusResponse } from "~/api";

/**
 * Get the status of the SpaceTraders API by calling the root endpoint.
 */
export async function getStatus() {
  const response = await fetch("https://api.spacetraders.io/v2/");

  if (!response.ok) {
    return notOkResponse(
      response,
      "Unable to connect to the SpaceTraders at this time",
      "getStatus",
    );
  }

  return okResponse(GetStatusResponse.parse(await response.json()));
}
