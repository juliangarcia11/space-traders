import {
  badRequest,
  notOkResponse,
  okResponse,
  parseFormData,
  requestOptions,
  TApiError,
  TResponse,
} from "~/api/_utils";
import {
  DeliverContractRequest,
  DeliverContractResponse,
} from "~/api/contracts/deliver-contract.schema";
import { api_urls } from "~/api/_urls";

/**
 * Deliver cargo to a contract.
 *
 * In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as destinationSymbol of a contract) and must have a number of units of a good required by this contract in its cargo.
 *
 * Cargo that was delivered will be removed from the ship's cargo.
 */
export async function deliverContract(
  prevState: TResponse,
  formData: FormData,
) {
  const { contractId, ...rest } = parseFormData(formData);
  if (!contractId || typeof contractId !== "string") {
    return badRequest(
      "Invalid form data: contractId is required",
      "deliverContract",
    );
  }

  const parsedFormData = DeliverContractRequest.safeParse(rest);

  // Server-side validation of the form data before sending it to the SpaceTraders API
  if (!parsedFormData.success) {
    return badRequest(
      "Invalid form data: " + parsedFormData.error.message,
      "deliverContract",
    );
  }

  // Send the form data to the SpaceTraders API
  const response = await fetch(
    api_urls.deliver_contract(contractId),
    await requestOptions({
      method: "POST",
      body: JSON.stringify(parsedFormData.data),
    }),
  );

  // Check if the response from the SpaceTraders API is ok
  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "deliverContract");
  }

  // Parse the response from the SpaceTraders API and return it to the client
  const parsedResponse = DeliverContractResponse.safeParse(
    await response.json(),
  );
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "deliverContract",
    );
  }

  return okResponse(parsedResponse.data);
}
