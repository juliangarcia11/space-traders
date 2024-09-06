import { type TContract } from "~/api";
import { ContractAcceptanceStatus } from "~/app/dashboard/components/contract-acceptance-status";
import { ContractTypeIcon } from "~/app/dashboard/components/contract-type-icon";
import { ContractTitle } from "~/app/dashboard/components/contract-title";
import { calculateAcceptance } from "~/app/dashboard/utils/calculate-acceptance";
import { ContractDestinationLink } from "~/app/dashboard/components/contract-destination-link";

export function ContractSummary({ contract }: { contract: TContract }) {
  const border = calculateAcceptance({
    isAccepted: contract.accepted,
    isFulfilled: contract.fulfilled,
    isExpired: new Date(contract.expiration) < new Date(),
    acceptedMsg: "border-blue-500",
    fulfilledMsg: "border-green-500",
    expiredMsg: "border-red-500",
    defaultMsg: "border-black/10 dark:border-white/10",
  });
  const background = calculateAcceptance({
    isAccepted: contract.accepted,
    isFulfilled: contract.fulfilled,
    isExpired: new Date(contract.expiration) < new Date(),
    acceptedMsg: "bg-blue-50 dark:bg-blue-900",
    fulfilledMsg: "bg-green-50 dark:bg-green-900",
    expiredMsg: "bg-red-50 dark:bg-red-900",
    defaultMsg:
      "bg-gray-50 hover:bg-gray-50/50 dark:bg-white/5 dark:hover:bg-white/10",
  });

  return (
    <div
      className={`${border} ${background} my-2 flex flex-row gap-2 rounded-xl border p-4 shadow-md transition duration-300 ease-in-out hover:shadow-lg md:gap-4`}
    >
      <ContractTypeIcon type={contract.type} />
      <ContractTitle {...contract} />
      <div className="flex flex-col items-end gap-1">
        <ContractDestinationLink {...contract} />
        <ContractAcceptanceStatus {...contract} />
      </div>
    </div>
  );
}
