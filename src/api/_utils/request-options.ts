"use server";

import { cookies } from "next/headers";
import { env } from "~/env";

/**
 * Get the request options for the SpaceTraders API.
 * By default, the request options will include the Content-Type header and the Authorization header.
 * @param options - The request options to include
 */
export async function requestOptions(options?: Partial<RequestInit>) {
  // Get the auth cookie from the request headers
  // If the auth cookie is not found, use the environment variable
  // If the environment variable is not found, throw an error
  const authCookie =
    cookies().get("auth")?.value ?? env.SPACE_TRADERS_TOKEN ?? "";

  if (!authCookie) {
    throw new UnauthorizedError("No auth token found");
  }

  return {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: authCookie.startsWith("Bearer ")
        ? authCookie
        : `Bearer ${authCookie}`,
      ...options?.headers,
    },
  };
}

class UnauthorizedError extends Error {
  constructor(message: string) {
    super("Unauthorized" + (message ? `: ${message}` : ""));
  }
}
