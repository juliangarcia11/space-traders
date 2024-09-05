"use server";

import { api_urls, fetchAndParse, GetAgentResponse } from "~/api";

/**
 * Get an agent by their username (Agent.symbol) or the current agent if no username is provided
 * @param agentSymbol - The symbol of the agent to retrieve
 * @returns A promise that resolves to the agent data or an error response
 */
export async function getAgent(agentSymbol = "") {
  const url =
    agentSymbol.length > 0
      ? api_urls.get_agent(agentSymbol)
      : api_urls.get_my_agent;

  const response = await fetchAndParse(url, GetAgentResponse, "getAgent");
  return response.data.data;
}
