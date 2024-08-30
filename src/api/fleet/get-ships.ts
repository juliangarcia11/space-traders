"use server";

import { api_urls } from "~/api/_urls";
import {
  notOkResponse,
  okResponse,
  requestOptions,
  type TApiError,
} from "~/api/_utils";
import { GetShipsResponse } from "~/api/fleet/get-ships.schema";

/**
 * Get all ships using pagination
 * Only works for ships that belong to the user
 */
export async function getShips(page = 1, limit = 10) {
  const url = `${api_urls.fleet.get_my_ships}?page=${page}&limit=${limit}`;
  const response = await fetch(url, await requestOptions());

  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "getShips");
  }

  const parsedResponse = GetShipsResponse.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "getShips",
    );
  }

  return okResponse(parsedResponse.data);
}
