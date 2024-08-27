import { type TContract } from "~/api";
import { AcceptanceStatus } from "~/app/dashboard/components/acceptance-status";

export function ContractSummary({ contract }: { contract: TContract }) {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-gray-300 p-4">
      <h3 className="text-lg font-semibold">
        {contract.type}
        {" - "}
        {contract.factionSymbol}
        {": "}
        {contract.id}
      </h3>
      <AcceptanceStatus {...contract} />
    </div>
  );
}
