"use server";

import { api_urls, fetchAndParse, GetFactionResponse } from "~/api";

export async function getFaction(factionId: string) {
  const url = api_urls.get_faction(factionId);
  const response = await fetchAndParse(url, GetFactionResponse, "getFaction");
  return response.data.data;
}
