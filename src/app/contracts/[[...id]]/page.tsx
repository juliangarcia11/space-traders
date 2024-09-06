import { UnderConstruction } from "~/components";

export default async function ContractsPage(props: {
  params: { id?: string };
}) {
  return (
    <section className="my-8 flex justify-center">
      <UnderConstruction
        message={`Contract details ${props.params.id ? "for " + props.params.id : ""} coming soon!`}
      />
    </section>
  );
}
