import { type TContractTerms } from "~/api";
import { WaypointLink } from "~/app/dashboard/components/waypoint-link";

export function ContractDestinationLink({ terms }: { terms: TContractTerms }) {
  const firstDelivery = terms.deliver.find((delivery) => {
    return delivery.unitsRequired >= delivery.unitsFulfilled;
  });

  if (!firstDelivery) {
    return null;
  }

  const tooltip =
    `Deliver${firstDelivery.unitsRequired === firstDelivery.unitsFulfilled ? "ed" : ""}` +
    ` ${firstDelivery.unitsRequired} ${firstDelivery.tradeSymbol} to ${firstDelivery.destinationSymbol}`;

  return (
    <WaypointLink
      waypoint={firstDelivery.destinationSymbol}
      tooltip={tooltip}
    />
  );
}
