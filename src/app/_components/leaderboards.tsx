import { type TLeaderboards } from "~/api/get-status.schema";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Message } from "primereact/message";

type LeaderboardsProps = {
  data?: TLeaderboards;
  "data-testid": string;
};

export function Leaderboards({
  data,
  "data-testid": dataTestId,
}: LeaderboardsProps) {
  return (
    <Card
      title="Leaderboards"
      className="rounded-xl p-4 shadow-lg"
      data-testid={dataTestId}
      pt={{
        content: {
          className: "flex flex-row gap-8",
        },
      }}
    >
      {!data && <Message severity="error" text="No data available" />}
      {data?.mostCredits && (
        <DataTable
          value={data.mostCredits.slice(0, 5)}
          data-testid="most-credits"
        >
          <Column field="agentSymbol" header="Agent" />
          <Column field="credits" header="Credits" />
        </DataTable>
      )}
      {data?.mostSubmittedCharts && (
        <DataTable
          value={data.mostSubmittedCharts}
          data-testid="most-submitted-charts"
        >
          <Column field="agentSymbol" header="Agent" />
          <Column field="chartCount" header="Charts" />
        </DataTable>
      )}
    </Card>
  );
}
