import type { TFaction } from "~/api";

/**
 * Title of a faction styled with a border and symbol.
 */
export function FactionTitle({ faction }: { faction: TFaction }) {
  return (
    <h3
      className="border-b-2 border-black/10 px-3 pt-1 font-mono text-2xl font-bold tracking-wide dark:border-white/10"
      data-testid="faction-title"
    >
      {faction.name}
      <span className="text-sm font-thin text-gray-500"> {faction.symbol}</span>
    </h3>
  );
}
