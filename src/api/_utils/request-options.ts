"use server";

import { cookies } from "next/headers";
import { api_urls } from "~/api";
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
  const authCookie = cookies().get(api_urls.cookie)?.value ?? null;

  if (!authCookie) {
    throw new UnauthorizedError("No auth token found");
  }

  // apply options gracefully so they add the auth headers
  // but can still be customized per request
  return {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: authCookie.startsWith("Bearer ")
        ? authCookie
        : `Bearer ${authCookie}`,
      ...options?.headers,
    },
    next: {
      // revalidate every 5 minutes in development/testing,
      // otherwise use the default allowed by SpaceTraders API
      revalidate:
        env.NODE_ENV !== "production" ? 300 : (options?.next?.revalidate ?? 2),
      ...options?.next,
    },
  };
}

class UnauthorizedError extends Error {
  constructor(message: string) {
    super("Unauthorized" + (message ? `: ${message}` : ""));
  }
}
