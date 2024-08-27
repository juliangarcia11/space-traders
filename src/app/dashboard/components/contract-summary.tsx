import { type TContract } from "~/api";
import { AcceptanceStatus } from "~/app/dashboard/components/acceptance-status";
import { ContractTypeIcon } from "~/app/dashboard/components/contract-type-icon";

export function ContractSummary({ contract }: { contract: TContract }) {
  return (
    <div className="flex flex-row items-center gap-2 rounded-md border border-gray-300 p-4">
      <ContractTypeIcon type={contract.type} />
      <h3 className="w-fit text-lg font-semibold">
        {contract.factionSymbol}
        {": "}
        {contract.id}
      </h3>
      <AcceptanceStatus {...contract} />
    </div>
  );
}
