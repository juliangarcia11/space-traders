"use server";

import { api_urls, fetchAndParse, GetShipsResponse } from "~/api";

/**
 * Get all ships using pagination
 * Only works for ships that belong to the user
 */
export async function getShips(page = 1, limit = 10) {
  const url = `${api_urls.fleet.get_my_ships}?page=${page}&limit=${limit}`;
  const response = await fetchAndParse(url, GetShipsResponse, "getShips");
  return response.data;
}
