import { type PropsWithChildren } from "react";
import { AuthRequiredLayout } from "~/components";

/**
 * A layout wrapper for all the dashboard pages.
 */
export default function DashboardLayout({ children }: PropsWithChildren) {
  return <AuthRequiredLayout>{children}</AuthRequiredLayout>;
}
