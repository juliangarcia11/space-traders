import { UnderConstruction } from "~/components";
import { getContract, getContracts } from "~/api";

export default async function ContractsPage(props: {
  params: { id?: string };
}) {
  const results = props.params.id
    ? await getContract(props.params.id)
    : await getContracts();
  return (
    <section className="my-8 flex justify-center">
      <UnderConstruction
        message={`Contract details ${props.params.id ? "for " + props.params.id : ""} coming soon!`}
      />
      {/*<pre>{JSON.stringify(results, null, 2)}</pre>*/}
    </section>
  );
}
