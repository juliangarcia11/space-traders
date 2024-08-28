import { type TContract } from "~/api";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { calculateAcceptance } from "~/app/dashboard/utils/calculate-acceptance";

type ContractAcceptanceStatusProps = Pick<
  TContract,
  "accepted" | "fulfilled" | "expiration" | "deadlineToAccept"
>;

export function ContractAcceptanceStatus({
  accepted,
  fulfilled,
  expiration,
  deadlineToAccept,
}: ContractAcceptanceStatusProps) {
  const isExpired = new Date(expiration) < new Date();

  const label = calculateAcceptance({
    isAccepted: accepted,
    isFulfilled: fulfilled,
    isExpired,
    acceptedMsg: "Accepted",
    fulfilledMsg: "Fulfilled",
    expiredMsg: "Expired",
    defaultMsg: "Not Accepted",
  });

  const icon = calculateAcceptance({
    isAccepted: accepted,
    isFulfilled: fulfilled,
    isExpired,
    acceptedMsg: "pi-clock",
    fulfilledMsg: "pi-check",
    expiredMsg: "pi-times",
    defaultMsg: "",
  });

  const tooltip = calculateAcceptance({
    isAccepted: accepted,
    isFulfilled: fulfilled,
    isExpired,
    acceptedMsg: `Expires on ${expiration}`,
    fulfilledMsg: "",
    expiredMsg: `Expired on ${expiration}`,
    defaultMsg: `Deadline to accept is ${deadlineToAccept}`,
  });

  const severity = calculateAcceptance({
    isAccepted: accepted,
    isFulfilled: fulfilled,
    isExpired,
    acceptedMsg: "info",
    fulfilledMsg: "success",
    expiredMsg: "danger",
    defaultMsg: "warning",
  }) as "info" | "success" | "danger" | "warning";

  return (
    <>
      <Tooltip content={tooltip} target=".acceptance-status" position="top" />
      <Tag
        value={label}
        icon={`pi ${icon}`}
        severity={severity}
        className="acceptance-status ml-auto h-fit"
        data-testid="acceptance-status"
      />
    </>
  );
}
