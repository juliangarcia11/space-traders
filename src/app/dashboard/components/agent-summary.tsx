import { type TAgent, type TFaction } from "~/api";
import { DashboardSection } from "~/app/dashboard/components/dashboard-section";
import { Faction } from "~/app/dashboard/components/faction";

/**
 * Summary of an agent including symbol, headquarters, credits, ship count, and faction.
 *
 * NOTE: This is a WIP component and may be subject to change.
 */
export function AgentSummary(props: { agent: TAgent; faction: TFaction }) {
  return (
    <DashboardSection title="Agent Summary" dataTestId="agent-summary">
      <dl className="grid grid-cols-2 gap-1">
        <div>Symbol:</div>
        <div>{props.agent.symbol}</div>
        <div>Headquarters:</div>
        <div>{props.agent.headquarters}</div>
        <div>Credits:</div>
        <div>{props.agent.credits}</div>
        <div>Ship Count:</div>
        <div>{props.agent.shipCount}</div>
      </dl>
      <div className="w-full text-end">
        <Faction faction={props.faction} />
      </div>
    </DashboardSection>
  );
}
