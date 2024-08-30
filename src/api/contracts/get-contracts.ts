"use server";

import { api_urls } from "~/api/_urls";
import {
  notOkResponse,
  okResponse,
  requestOptions,
  type TApiError,
} from "~/api/_utils";
import { GetContractsResponse } from "~/api/contracts/get-contracts.schema";

/**
 * Get all contracts for the current user using pagination
 */
export async function getContracts(page = 1, limit = 10) {
  const url = `${api_urls.contracts.get_contracts}?page=${page}&limit=${limit}`;

  const response = await fetch(url, await requestOptions());

  // Check if the response from the SpaceTraders API is ok
  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "getContracts");
  }

  // Parse the response from the SpaceTraders API to get proper typings
  const parsedResponse = GetContractsResponse.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "getContracts",
    );
  }

  return okResponse(parsedResponse.data);
}
