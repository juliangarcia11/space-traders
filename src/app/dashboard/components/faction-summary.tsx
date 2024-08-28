import type { TFaction } from "~/api";
import { FactionTitle } from "~/app/dashboard/components/faction-title";
import { FactionTraits } from "~/app/dashboard/components/faction-trait";

/**
 * Summary of a faction including headquarters, traits, and recruiting status.
 *
 * NOTE: This is a WIP component and may be subject to change.
 */
export function FactionSummary({ faction }: { faction: TFaction }) {
  return (
    <div className="flex flex-col gap-2 md:max-w-lg md:gap-4">
      <FactionTitle faction={faction} />
      <p>{faction.description}</p>
      <FactionTraits traits={faction.traits} />
    </div>
  );
}
