import {
  PostAgentResponse200,
  type TContract,
  type TPostAgentResponse,
} from "~/api";

import { Contracts } from "~/app/dashboard/components/contracts";

export default function DashboardPage() {
  const response = PostAgentResponse200 as Required<TPostAgentResponse>;
  const contract = response.data.contract as TContract;
  return (
    <div className="my-4">
      {/*<pre>{JSON.stringify(response, null, 2)}</pre>*/}
      <Contracts contracts={[contract]} />
    </div>
  );
}
