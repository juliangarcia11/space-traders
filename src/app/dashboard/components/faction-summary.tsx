import type { TFaction } from "~/api";
import { FactionTitle } from "~/app/dashboard/components/faction-title";
import { FactionTrait } from "~/app/dashboard/components/faction-trait";

/**
 * Summary of a faction including headquarters, traits, and recruiting status.
 *
 * NOTE: This is a WIP component and may be subject to change.
 */
export function FactionSummary({ faction }: { faction: TFaction }) {
  return (
    <div>
      <FactionTitle faction={faction} />
      <div className="mt-4 flex flex-row justify-center gap-1">
        {faction.traits.map((t) => (
          <FactionTrait trait={t} key={t.symbol} />
        ))}
      </div>
    </div>
  );
}
