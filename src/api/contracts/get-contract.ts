"use server";

import { api_urls } from "~/api/_urls";

import {
  notOkResponse,
  okResponse,
  requestOptions,
  type TApiError,
} from "~/api/_utils";
import { GetContractSchema } from "~/api/contracts/get-contract.schema";

/**
 * Get a contract by its ID
 */
export async function getContract(contractId: string) {
  const url = api_urls.contracts.get_contract(contractId);

  const response = await fetch(url, await requestOptions());

  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "getContract");
  }

  const parsedResponse = GetContractSchema.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "getContract",
    );
  }

  return okResponse(parsedResponse.data.data);
}
