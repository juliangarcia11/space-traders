import { Card } from "primereact/card";
import { getStatus } from "~/api";
import { Divider } from "primereact/divider";

export default async function AboutPage() {
  const response = await getStatus();
  const apiDescription = response.success
    ? response.data.description
    : "The SpaceTraders API is currently down. This app will not function properly until the API is back online :( Please check back later.";
  const appDescription = `This is a UI companion application for the SpaceTraders API. I built this app to help me practice Next.js, TypeScript, and more. You can find the source code for this app on GitHub.`;

  return (
    <Card
      className="mx-4 my-1 p-4 text-center md:text-start"
      header={
        <h1
          className="mx-4 mt-2 text-6xl md:text-4xl"
          data-testid="about-title"
        >
          About Space Traders
          <Divider />
        </h1>
      }
    >
      <InfoSection
        title="The API:"
        description={apiDescription}
        data-testid="api-description"
      />
      <InfoSection
        title="The App:"
        description={appDescription}
        data-testid="app-description"
      />
    </Card>
  );
}

interface InfoSectionProps {
  title: string;
  description: string;
  "data-testid": string;
}

function InfoSection({
  title,
  description,
  "data-testid": testId,
}: InfoSectionProps) {
  return (
    <section className="flex flex-col justify-between md:mx-16 md:my-4 md:flex-row">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p data-testid={testId} className="text-wrap text-xl font-thin md:w-2/3">
        {description}
      </p>
    </section>
  );
}
