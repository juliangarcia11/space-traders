import { getAgent, getContracts, getFaction, getShips } from "~/api";

import { Contracts } from "~/app/dashboard/components/contracts";
import { AgentSummary } from "~/app/dashboard/components/agent-summary";
import { Ships } from "~/app/dashboard/components/ships";

export default async function DashboardPage() {
  const agent = await getAgent();
  const contracts = await getContracts();
  const faction = await getFaction(agent.startingFaction);
  const ships = await getShips();

  return (
    <div className="my-4 grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-6 lg:col-span-4">
        <Contracts contracts={contracts.data} />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <Ships ships={ships.data} />
      </div>
      <div className="col-span-12 lg:col-span-3">
        <AgentSummary agent={agent} faction={faction} />
      </div>
    </div>
  );
}
