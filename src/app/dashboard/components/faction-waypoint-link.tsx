import Link from "next/link";
import { Button } from "primereact/button";

export function FactionWaypointLink({ waypoint }: { waypoint: string }) {
  return (
    <Link href={`/waypoints/${waypoint}`} data-testid="faction-waypoint-link">
      <Button
        label={waypoint}
        icon="pi pi-map-marker"
        iconPos="right"
        size="small"
        text
        tooltip={`Show headquarters on the map`}
      />
    </Link>
  );
}
