import {
  okResponse,
  requestOptions,
  notOkResponse,
  type TApiError,
} from "~/api/_utils";
import { NegotiateContractResponseSchema } from "~/api/contracts/negotiate-contract.schema";
import { api_urls } from "~/api/_urls";

/**
 * Negotiate a contract
 */
export async function negotiateContract(shipId: string) {
  const url = api_urls.contracts.negotiate_contract(shipId);
  const response = await fetch(url, await requestOptions({ method: "POST" }));

  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "negotiateContract");
  }

  const parsedResponse = NegotiateContractResponseSchema.safeParse(
    await response.json(),
  );
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "negotiateContract",
    );
  }

  return okResponse(parsedResponse.data.data);
}
