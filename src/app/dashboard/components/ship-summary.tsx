import type { TShip } from "~/api";
import { WaypointLink } from "~/app/dashboard/components/waypoint-link";
import { ShipCargoSummary } from "~/app/dashboard/components/ship-cargo-summary";

export function ShipSummary({ ship }: { ship: TShip }) {
  return (
    <div
      className="my-2 rounded-xl border border-black/10 bg-gray-50 p-4 shadow-md transition duration-300 ease-in-out hover:bg-gray-50/50 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
      data-testid="ship"
    >
      <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
        <div className="flex flex-col items-baseline md:flex-row md:gap-1">
          <ShipSymbol symbol={ship.symbol} />
          <ShipNavStatus status={ship.nav.status} />
        </div>

        <WaypointLink waypoint={ship.nav.waypointSymbol} tooltip={""} />
      </div>
      <div className="mt-2 flex justify-center md:justify-start">
        <ShipCargoSummary cargo={ship.cargo} />
      </div>
    </div>
  );
}

function ShipSymbol({ symbol }: { symbol: string }) {
  return (
    <h4
      className="m-0 inline w-fit p-0 text-2xl font-semibold"
      data-testid="ship-symbol"
    >
      {symbol}
    </h4>
  );
}

function ShipNavStatus({ status }: { status: string }) {
  return (
    <span className="text-md font-light" data-testid="ship-nav-status">
      {status}
    </span>
  );
}
