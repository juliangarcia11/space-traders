import { PageLink } from "~/components/page-link";
import { getStatus } from "~/api/get-status";
import { Message } from "primereact/message";

export default async function HomePage() {
  const response = await getStatus();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Message
        text={response.success ? response.data.status : response.error}
        severity={response.success ? "success" : "error"}
        data-testid="status"
      />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1
          className="text-5xl font-extrabold tracking-tight sm:text-[5rem]"
          data-testid="home-title"
        >
          Hello <span className="text-[hsl(280,100%,70%)]">World</span> App
        </h1>

        <p
          className="max-w-2xl text-center text-2xl"
          data-testid="home-description"
        >
          This is a Next.js starter template with Tailwind CSS, TypeScript,
          ESLint, Jest, Playwrite, and more.
        </p>

        <div className="flex flex-row justify-center gap-2">
          <PageLink
            href="/about"
            title="About"
            subtitle="Learn more about this template"
            data-testid="about-link"
          />
          <PageLink
            href="/test"
            title="Test"
            subtitle="Test if we can fetch data from the SpaceTraders API"
            data-testid="test-link"
          />
        </div>
      </div>
    </main>
  );
}
