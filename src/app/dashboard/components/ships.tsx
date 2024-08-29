import { DashboardSection } from "~/app/dashboard/components/dashboard-section";
import { type TShip } from "~/api";

export function Ships({ ships }: { ships: TShip[] }) {
  return (
    <DashboardSection title="Ships" dataTestId="ships">
      <pre>{JSON.stringify(ships, null, 2)}</pre>
    </DashboardSection>
  );
}
