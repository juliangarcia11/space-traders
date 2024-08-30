"use server";

import { api_urls } from "~/api/_urls";
import {
  notOkResponse,
  okResponse,
  requestOptions,
  type TApiError,
} from "~/api/_utils";
import { GetShipResponse } from "~/api/fleet/get-ship.schema";

/**
 * Get a ship by its ID
 * Only works for ships that belong to the user
 */
export async function getShip(shipId: string) {
  const url = api_urls.fleet.get_my_ship(shipId);
  const response = await fetch(url, await requestOptions());

  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "getShip");
  }

  const parsedResponse = GetShipResponse.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "getShip",
    );
  }

  return okResponse(parsedResponse.data);
}
