import { type TContract } from "~/api";

/**
 * Displays an icon representing the contract type.
 */
export function ContractTypeIcon({ type }: { type: TContract["type"] }) {
  const icons = {
    PROCUREMENT: "pi pi-search",
    TRANSPORT: "pi pi-truck",
    SHUTTLE: "pi pi-car",
  };
  const icon = icons[type] ?? "pi pi-question";

  return (
    <i className={`m-1 md:text-2xl ${icon}`} data-testid="contract-type-icon" />
  );
}
