"use server";
import {
  notOkResponse,
  okResponse,
  requestOptions,
  type TApiError,
} from "~/api/_utils";
import { api_urls } from "~/api/_urls";
import { GetAgentResponse } from "~/api/agents/get-agent.schema";

/**
 * Get an agent by their username (Agent.symbol) or the current agent if no username is provided
 */
export async function getAgent(agentSymbol = "") {
  const url =
    agentSymbol.length > 0
      ? api_urls.get_agent(agentSymbol)
      : api_urls.get_my_agent;

  const response = await fetch(url, await requestOptions());

  // Check if the response from the SpaceTraders API is ok
  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "getAgent");
  }

  // Parse the response from the SpaceTraders API to get proper typings
  const parsedResponse = GetAgentResponse.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "getAgent",
    );
  }

  // unpack the response from the SpaceTraders API and return it to the client
  return okResponse(parsedResponse.data.data);
}
