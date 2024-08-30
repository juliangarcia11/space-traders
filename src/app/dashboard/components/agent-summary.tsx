import { type TAgent, type TFaction } from "~/api";
import { DashboardSection } from "~/app/dashboard/components/dashboard-section";
import { Faction } from "~/app/dashboard/components/faction";
import { WaypointLink } from "~/app/dashboard/components/waypoint-link";
import { AgentCredits } from "~/app/dashboard/components/agent-credits";

/**
 * Summary of an agent including symbol, headquarters, credits, ship count, and faction.
 *
 * NOTE: This is a WIP component and may be subject to change.
 */
export function AgentSummary({
  agent,
  faction,
}: {
  agent: TAgent;
  faction: TFaction;
}) {
  return (
    <DashboardSection title={agent.symbol} dataTestId="agent-summary">
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-2 lg:gap-4">
        <AgentCredits credits={agent.credits} />
        <WaypointLink
          waypoint={agent.headquarters}
          tooltip="Show agent headquarters on map"
        />
        <span className="col-start-2 md:col-start-auto lg:col-start-2">
          <Faction faction={faction} />
        </span>
      </div>
    </DashboardSection>
  );
}
