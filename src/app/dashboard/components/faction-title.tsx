import { Tag } from "primereact/tag";
import type { TFaction } from "~/api";

/**
 * Faction name, symbol, and recruiting status.
 */
export function FactionTitle({ faction }: { faction: TFaction }) {
  return (
    <div className="flex flex-row justify-between border-b-2 border-black/10 p-1 px-3">
      <h3
        className="font-mono text-2xl font-bold tracking-wide dark:border-white/10"
        data-testid="faction-title"
      >
        {faction.name}
        <span className="text-sm font-thin text-gray-500">
          {" "}
          {faction.symbol}
        </span>
      </h3>
      <Tag
        severity={faction.isRecruiting ? "success" : "info"}
        data-testid="recruiting-status"
      >
        {faction.isRecruiting ? "RECRUITING" : "CLOSED"}
      </Tag>
    </div>
  );
}
