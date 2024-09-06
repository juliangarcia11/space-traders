import { type PropsWithChildren } from "react";
import { AuthRequiredLayout } from "~/components";

/**
 * A layout wrapper for all the contract pages.
 */
export default function ContractsLayout({ children }: PropsWithChildren) {
  return <AuthRequiredLayout>{children}</AuthRequiredLayout>;
}
