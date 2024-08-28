import { type TContract } from "~/api";
import { ContractAcceptanceStatus } from "~/app/dashboard/components/contract-acceptance-status";
import { ContractTypeIcon } from "~/app/dashboard/components/contract-type-icon";
import { ContractTitle } from "~/app/dashboard/components/contract-title";
import { calculateAcceptance } from "~/app/dashboard/utils/calculate-acceptance";

export function ContractSummary({ contract }: { contract: TContract }) {
  const border = calculateAcceptance({
    isAccepted: contract.accepted,
    isFulfilled: contract.fulfilled,
    isExpired: new Date(contract.expiration) < new Date(),
    acceptedMsg: "border-blue-500",
    fulfilledMsg: "border-green-500",
    expiredMsg: "border-red-500",
    defaultMsg: "border-gray-300",
  });
  const background = calculateAcceptance({
    isAccepted: contract.accepted,
    isFulfilled: contract.fulfilled,
    isExpired: new Date(contract.expiration) < new Date(),
    acceptedMsg: "bg-blue-50 dark:bg-blue-900",
    fulfilledMsg: "bg-green-50 dark:bg-green-900",
    expiredMsg: "bg-red-50 dark:bg-red-900",
    defaultMsg: "",
  });
  return (
    <div
      className={`${border} ${background} flex flex-row gap-2 rounded-md border border-gray-300 p-4 md:gap-4`}
    >
      <ContractTypeIcon type={contract.type} />
      <ContractTitle {...contract} />
      <ContractAcceptanceStatus {...contract} />
    </div>
  );
}
