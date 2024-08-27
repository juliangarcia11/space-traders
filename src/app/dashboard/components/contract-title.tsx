import { type TContract } from "~/api";

export function ContractTitle({
  id,
  factionSymbol,
}: Pick<TContract, "id" | "factionSymbol">) {
  return (
    <div className="flex flex-col items-start gap-1">
      <h2 className="text-2xl font-semibold" data-testid="contract-id">
        {id}
      </h2>
      <h3 className="ml-2 text-sm font-light" data-testid="contract-faction">
        {factionSymbol}
      </h3>
    </div>
  );
}
