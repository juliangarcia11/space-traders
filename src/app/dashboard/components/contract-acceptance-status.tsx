import { type TContract } from "~/api";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { calculateAcceptance } from "~/app/dashboard/utils/calculate-acceptance";
import { formatDate } from "~/app/dashboard/utils/date-formatting";

export function ContractAcceptanceStatus({
  id,
  accepted,
  fulfilled,
  terms,
  deadlineToAccept,
}: TContract) {
  const isExpired = new Date(terms.deadline) < new Date();

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
    defaultMsg: "pi-clock",
  });

  const tooltip = calculateAcceptance({
    isAccepted: accepted,
    isFulfilled: fulfilled,
    isExpired,
    acceptedMsg: `Expires on ${formatDate(terms.deadline)}`,
    fulfilledMsg: "",
    expiredMsg: `Expired on ${formatDate(terms.deadline)}`,
    defaultMsg: `Deadline to accept is ${formatDate(deadlineToAccept)}`,
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
      <Tooltip
        content={tooltip}
        target={`.acceptance-status-${id}`}
        position="top"
      />
      <Tag
        aria-label={label}
        icon={`pi ${icon}`}
        severity={severity}
        className={`acceptance-status-${id} h-fit w-fit`}
        data-testid="acceptance-status"
        pt={{
          icon: {
            style: { margin: "0" },
          },
        }}
      />
    </>
  );
}
