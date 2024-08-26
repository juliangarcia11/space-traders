import { type PropsWithChildren } from "react";
import { AuthRequiredLayout } from "~/components";

/**
 * A layout wrapper for all the agents pages.
 */
export default function AgentsLayout({ children }: PropsWithChildren) {
  return <AuthRequiredLayout>{children}</AuthRequiredLayout>;
}
