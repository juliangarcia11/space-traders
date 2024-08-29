import {
  getAgent,
  getContracts,
  getFaction,
  MockPostAgentResponse,
  type TPostAgentResponse,
} from "~/api";

import { Contracts } from "~/app/dashboard/components/contracts";
import { AgentSummary } from "~/app/dashboard/components/agent-summary";
import { Ships } from "~/app/dashboard/components/ships";

export default async function DashboardPage() {
  const response = MockPostAgentResponse as Required<TPostAgentResponse>;

  const agent = await getAgent();
  if (!agent.success) {
    throw new Error(agent.error);
  }

  const contracts = await getContracts();
  if (!contracts.success) {
    throw new Error(contracts.error);
  }

  const faction = await getFaction(agent.data.startingFaction);
  if (!faction.success) {
    throw new Error(faction.error);
  }

  return (
    <div className="my-4 grid grid-cols-12 gap-4">
      <div className="col-span-4">
        <Contracts contracts={contracts.data.data} />
      </div>
      <div className="col-span-5">
        <Ships ships={[response.data.ship]} />
      </div>
      <div className="col-span-3">
        <AgentSummary agent={agent.data} faction={faction.data} />
      </div>
    </div>
  );
}
