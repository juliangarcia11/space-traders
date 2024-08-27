import { Card } from "primereact/card";
import { type PropsWithChildren } from "react";

/**
 * Styled card component for dashboard sections.
 * @param children The children components to render.
 * @param title The title of the section.
 * @param dataTestId The data-testid attribute value.
 * @constructor
 */
export function DashboardSection({
  children,
  title,
  dataTestId = "dashboard-section",
}: Required<
  PropsWithChildren<{
    title: string;
    dataTestId?: string;
  }>
>) {
  return (
    <Card
      header={
        <h2 className="p-4 pb-0 text-2xl font-bold md:pl-6 md:pt-6">{title}</h2>
      }
      data-testid={dataTestId}
      className="w-fit"
      pt={{
        header: {
          className: "p-0",
        },
        content: {
          className: "p-0",
        },
        body: {
          className: "py-2 px-4",
        },
      }}
    >
      {children}
    </Card>
  );
}
