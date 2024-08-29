import Link from "next/link";
import { Button } from "primereact/button";

/**
 * Button that links to a waypoint's page (e.g. /waypoints/1).
 */
export function WaypointLink({
  waypoint,
  tooltip,
}: {
  waypoint: string;
  tooltip: string;
}) {
  return (
    <Link
      href={`/waypoints/${waypoint}`}
      prefetch
      data-testid={"waypoint-link-" + waypoint}
    >
      <Button
        label={waypoint}
        icon="pi pi-map-marker"
        iconPos="right"
        size="small"
        text
        tooltip={tooltip}
        tooltipOptions={{ position: "left" }}
      />
    </Link>
  );
}
