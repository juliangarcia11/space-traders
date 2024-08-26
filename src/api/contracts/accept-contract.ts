"use async";

import {
  okResponse,
  requestOptions,
  notOkResponse,
  TApiError,
} from "~/api/_utils";
import { AcceptContractResponse } from "~/api/contracts/accept-contract.schema";
import { api_urls } from "~/api/_urls";

/**
 * Accept a contract
 */
export async function acceptContract(contractId: string) {
  const url = api_urls.accept_contract(contractId);
  const response = await fetch(url, await requestOptions({ method: "POST" }));

  // Check if the response from the SpaceTraders API is ok
  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "acceptContract");
  }

  // Parse the response from the SpaceTraders API to get proper typings
  const parsedResponse = AcceptContractResponse.safeParse(
    await response.json(),
  );
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "acceptContract",
    );
  }

  return okResponse(parsedResponse.data);
}
