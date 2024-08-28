import type { TFaction } from "~/api";
import { FactionTitle } from "~/app/dashboard/components/faction-title";

/**
 * Summary of a faction including headquarters, traits, and recruiting status.
 *
 * NOTE: This is a WIP component and may be subject to change.
 */
export function FactionSummary({ faction }: { faction: TFaction }) {
  return (
    <div>
      <FactionTitle faction={faction} />
      <dl className="grid grid-cols-2 gap-1">
        <div>Headquarters:</div>
        <div>{faction.headquarters}</div>
        <div>Traits:</div>
        <div>{faction.traits.map((t) => t.name).join(", ")}</div>
        <div>Recruiting:</div>
        <div>{faction.isRecruiting ? "Yes" : "No"}</div>
      </dl>
    </div>
  );
}
