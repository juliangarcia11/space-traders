import { Card } from "primereact/card";
import { getStatus } from "~/api/get-status";

/**
 * Test Page
 *
 * Test if we can fetch data from the SpaceTraders API
 *
 * @constructor
 */
export default async function TestPage() {
  const response = await getStatus();

  return (
    <Card
      header={
        <h1 className="m-4 text-4xl font-bold" data-testid="test-title">
          Test Page
        </h1>
      }
      className={`m-4 overflow-auto p-4`}
      style={{ height: "95%" }}
    >
      <pre data-testid="api-res" className="m-4">
        {JSON.stringify(response, null, 2)}
      </pre>
    </Card>
  );
}
