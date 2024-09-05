import { type TContract } from "~/api";
import { Tag } from "primereact/tag";
import { Tooltip } from "primereact/tooltip";
import { calculateAcceptance } from "~/app/dashboard/utils/calculate-acceptance";
import { formatDate } from "~/app/dashboard/utils/date-formatting";

export function ContractAcceptanceStatus({
  id,
  accepted,
  fulfilled,
  expiration,
  deadlineToAccept,
}: TContract) {
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
    defaultMsg: "pi-clipboard",
  });

  const tooltip = calculateAcceptance({
    isAccepted: accepted,
    isFulfilled: fulfilled,
    isExpired,
    acceptedMsg: `Expires on ${formatDate(expiration)}`,
    fulfilledMsg: "",
    expiredMsg: `Expired on ${formatDate(expiration)}`,
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
        value={label}
        icon={`pi ${icon}`}
        severity={severity}
        className={`acceptance-status-${id} ml-auto h-fit`}
        data-testid="acceptance-status"
        pt={{
          value: {
            className: "hidden md:block ",
          },
          icon: {
            className: "ml-1 md:ml-0",
          },
        }}
      />
    </>
  );
}
