"use server";

import { GetStatusResponse } from "~/api/get-status.schema";

export async function getStatus() {
  try {
    const response = await fetch("https://api.spacetraders.io/v2/");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      success: true,
      data: GetStatusResponse.parse(await response.json()),
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message:
        "An error occurred while fetching data from the SpaceTraders API",
    };
  }
}
