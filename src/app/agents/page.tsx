import { getAgents } from "~/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

type AgentsListPageProps = {
  searchParams: { page?: number; limit?: number };
};

export default async function AgentsListPage({
  searchParams: { page, limit },
}: AgentsListPageProps) {
  const response = await getAgents(page, limit);
  if (!response.success) {
    return <div>Error loading agents</div>;
  }

  const agents = response.data.data;
  const pagination = response.data.meta;

  return (
    <div className="mx-4">
      <DataTable
        value={agents}
        lazy
        paginator
        rows={pagination.limit}
        totalRecords={pagination.total ?? 0}
        rowsPerPageOptions={[5, 10, 20]}
        paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}"
        scrollable
        scrollHeight="400px"
      >
        <Column header={"Agent"} field={"symbol"} />
        <Column header={"Headquarters"} field={"headquarters"} />
        <Column header={"Credits"} field={"credits"} />
        <Column header={"Starting Faction"} field={"startingFaction"} />
        <Column header={"Ships"} field={"shipCount"} />
      </DataTable>
    </div>
  );
}
