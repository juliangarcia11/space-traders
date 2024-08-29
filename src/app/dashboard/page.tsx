import {
  getAgent,
  getContracts,
  getFaction,
  PostAgentResponse200,
  type TContract,
  type TPostAgentResponse,
} from "~/api";

import { Contracts } from "~/app/dashboard/components/contracts";
import { AgentSummary } from "~/app/dashboard/components/agent-summary";
import { Ships } from "~/app/dashboard/components/ships";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const response = PostAgentResponse200 as Required<TPostAgentResponse>;

  const agent = await getAgent();

  if (!agent.success) {
    redirect("/");
  }

  const contracts = await getContracts();
  const faction = await getFaction(agent.data.startingFaction);

  if (!contracts.success || !faction.success) {
    redirect("/");
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
