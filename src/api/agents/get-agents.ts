"use server";
import {
  notOkResponse,
  okResponse,
  requestOptions,
  type TApiError,
} from "~/api/_utils";
import { api_urls } from "~/api/_urls";
import { GetAgentsResponse } from "~/api/agents/get-agents.schema";

/**
 * Get all agents using pagination
 */
export async function getAgents(page = 1, limit = 10) {
  const url = `${api_urls.get_agents}?page=${page}&limit=${limit}`;

  const response = await fetch(url, await requestOptions());

  // Check if the response from the SpaceTraders API is ok
  if (!response.ok) {
    const json = (await response.json()) as TApiError;
    return notOkResponse(response, json.error.message, "getAgents");
  }

  // Parse the response from the SpaceTraders API to get proper typings
  const parsedResponse = GetAgentsResponse.safeParse(await response.json());
  if (!parsedResponse.success) {
    return notOkResponse(
      response,
      "Unable to parse response: " + parsedResponse.error.message,
      "getAgents",
    );
  }

  return okResponse(parsedResponse.data);
}
