import { UnderConstruction } from "~/components";

export default function WaypointsPage(props: { params: { id?: string } }) {
  return (
    <section className="my-8 flex justify-center">
      <UnderConstruction
        message={`Waypoint details & map${props.params.id ? "s of " + props.params.id : ""} coming soon!`}
      />
    </section>
  );
}
