import { Divider } from "primereact/divider";
import { Card } from "primereact/card";

export function UnderConstruction({
  title,
  message,
}: {
  title?: string;
  message?: string;
}) {
  return (
    <Card className="h-fit w-fit border-2 border-orange-300 bg-orange-300/10 text-center shadow-lg dark:border-orange-800 dark:bg-orange-500/10">
      <h4 className="text-xl font-semibold">{title ?? "Under Construction"}</h4>
      <Divider className="before:border-orange-300 dark:before:border-orange-800" />
      <span className="text-4xl">🚧</span>
      <p className="p-4">{message ?? "This feature is under construction."}</p>
    </Card>
  );
}
