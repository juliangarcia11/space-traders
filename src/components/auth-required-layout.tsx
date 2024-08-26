import { type PropsWithChildren } from "react";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { api_urls } from "~/api";

/**
 * A layout that requires the user to have the auth cookie set.
 * @param children
 * @constructor
 */
export function AuthRequiredLayout({ children }: PropsWithChildren) {
  const authorized = !!cookies().get(api_urls.cookie)?.value;
  if (!authorized) {
    return notFound();
  }
  return children;
}
