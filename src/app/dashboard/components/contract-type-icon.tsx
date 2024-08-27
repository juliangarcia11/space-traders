import { TContract } from "~/api";

/**
 * Displays an icon representing the contract type.
 */
export function ContractTypeIcon({ type }: { type: TContract["type"] }) {
  const icons = {
    PROCUREMENT: "pi pi-search",
    TRANSPORT: "pi pi-truck",
    SHUTTLE: "pi pi-car",
  };

  return (
    <i
      className={icons[type] ?? "pi pi-question"}
      data-testid="contract-type-icon"
    />
  );
}
