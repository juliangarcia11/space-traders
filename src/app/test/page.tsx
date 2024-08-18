import { Card } from "primereact/card";

/**
 * Test Page
 *
 * Test if we can fetch data from the SpaceTraders API
 *
 * @constructor
 */
export default async function TestPage() {
  async function action() {
    return fetch('https://api.spacetraders.io/v2/')
      .then(response => response.json())
      .catch(err => console.error(err));
  }
  const response = await action() as unknown;

  return (
    <Card
      header={
        <h1 className="m-4 text-4xl font-bold" data-testid="test-title">
          Test Page
        </h1>
      }
      className={`m-4 p-4 overflow-auto h-96`}
    >
      <pre data-testid="api-res" className="m-4">
        {JSON.stringify(response, null, 2)}
      </pre>
    </Card>
  );
}
