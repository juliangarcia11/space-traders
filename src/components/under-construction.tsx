import { Card } from "primereact/card";
import { Divider } from "primereact/divider";

export function UnderConstruction({
  title,
  message,
}: {
  title?: string;
  message?: string;
}) {
  return (
    <Card
      header={
        <>
          <h1 className="text-center text-4xl font-bold">
            {title ?? "Under Construction"}
          </h1>
          <Divider />
        </>
      }
      className="mx-auto w-fit border-2 border-orange-300 bg-orange-50 p-8"
    >
      <p className="justify-content-center flex flex-col text-lg">
        <i className="pi pi-exclamation-triangle text-center text-4xl" />
        {message ?? "This area is currently under construction."}
      </p>
    </Card>
  );
}
