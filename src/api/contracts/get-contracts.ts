"use server";

import { api_urls, fetchAndParse, GetContractsResponse } from "~/api";

/**
 * Get all contracts for the current user using pagination
 */
export async function getContracts(page = 1, limit = 10) {
  const url = `${api_urls.contracts.get_contracts}?page=${page}&limit=${limit}`;
  const response = await fetchAndParse(
    url,
    GetContractsResponse,
    "getContracts",
  );
  return response.data;
}
