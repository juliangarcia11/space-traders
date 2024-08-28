import {
  PostAgentResponse200,
  type TContract,
  type TPostAgentResponse,
} from "~/api";

import { Contracts } from "~/app/dashboard/components/contracts";
import { AgentSummary } from "~/app/dashboard/components/agent-summary";

export default function DashboardPage() {
  const response = PostAgentResponse200 as Required<TPostAgentResponse>;
  const agent = response.data.agent;
  const contract = response.data.contract as TContract;
  const faction = response.data.faction;
  return (
    <div className="my-4">
      {/*<pre>{JSON.stringify(faction, null, 2)}</pre>*/}
      <Contracts contracts={[contract]} />
      <AgentSummary agent={agent} faction={faction} />
    </div>
  );
}
