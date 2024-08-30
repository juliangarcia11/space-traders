import { DashboardSection } from "~/app/dashboard/components/dashboard-section";
import { type TShip } from "~/api";
import { ShipSummary } from "~/app/dashboard/components/ship-summary";

export function Ships({ ships }: { ships: TShip[] }) {
  return (
    <DashboardSection title="Ships" dataTestId="ships">
      <ul className="flex flex-col gap-2">
        {ships.map((ship) => (
          <li key={ship.symbol}>
            <ShipSummary ship={ship} />
          </li>
        ))}
      </ul>
    </DashboardSection>
  );
}
