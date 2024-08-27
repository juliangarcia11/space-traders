import { type TContract } from "~/api";
import { DashboardSection } from "~/app/dashboard/components/dashboard-section";
import { ContractSummary } from "~/app/dashboard/components/contract-summary";

export function Contracts({ contracts }: { contracts: TContract[] }) {
  return (
    <DashboardSection title="Contracts" dataTestId="contracts">
      <ul>
        {contracts.map((contract) => (
          <li key={contract.id}>
            <ContractSummary contract={contract} />
          </li>
        ))}
      </ul>
    </DashboardSection>
  );
}
