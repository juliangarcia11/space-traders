import { DashboardSection } from "~/app/dashboard/components/dashboard-section";
import { type TShip } from "~/api";
import { UnderConstruction } from "~/components";

export function Ships({ ships: _ }: { ships: TShip[] }) {
  return (
    <DashboardSection title="Ships" dataTestId="ships">
      <div className="flex justify-center">
        <UnderConstruction />
        {/*<pre>{JSON.stringify(ships, null, 2)}</pre>*/}
      </div>
    </DashboardSection>
  );
}
