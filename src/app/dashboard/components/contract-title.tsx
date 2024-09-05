import { type TContract } from "~/api";
import { Tooltip } from "primereact/tooltip";

export function ContractTitle({
  id,
  factionSymbol,
}: Pick<TContract, "id" | "factionSymbol">) {
  return (
    <div className="flex w-2/4 flex-col items-start gap-1">
      <h2
        className="contract-id w-full overflow-hidden text-ellipsis text-2xl font-semibold"
        data-testid="contract-id"
      >
        {id}
      </h2>
      <Tooltip target=".contract-id" position="top" content={id} />
      <h3 className="ml-2 text-sm font-light" data-testid="contract-faction">
        {factionSymbol}
      </h3>
    </div>
  );
}
