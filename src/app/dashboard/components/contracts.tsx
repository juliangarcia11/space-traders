import { type TContract } from "~/api";
import { DashboardSection } from "~/app/dashboard/components/dashboard-section";
import { ContractSummary } from "~/app/dashboard/components/contract-summary";

export function Contracts({ contracts }: { contracts: TContract[] }) {
  return (
    <DashboardSection title="Contracts" dataTestId="contracts">
      {contracts.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {contracts.map((contract) => (
            <li key={contract.id}>
              <ContractSummary contract={contract} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-lg font-light italic">No contracts found.</p>
      )}
    </DashboardSection>
  );
}
