import type { TShipCargo } from "~/api";
import { Tag } from "primereact/tag";

/**
 * A summary of a ship's current cargo.
 */
export function ShipCargoSummary({ cargo }: { cargo: TShipCargo }) {
  return (
    <div className="flex flex-row gap-2">
      <Tag
        severity={cargo.capacity > 0 ? "success" : "warning"}
        data-testid="cargo-capacity"
      >
        capacity: {cargo.capacity}
      </Tag>
      <Tag data-testid="cargo-units">units: {cargo.units}</Tag>
      <Tag
        severity={cargo.inventory.length > 0 ? "success" : "warning"}
        data-testid="cargo-inventory-count"
      >
        inventory: {cargo.inventory.length}
      </Tag>
    </div>
  );
}
