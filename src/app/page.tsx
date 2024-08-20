import Link from "next/link";
import { Message } from "primereact/message";
import { Tag } from "primereact/tag";

import { getStatus } from "~/api";
import { Announcements, Leaderboards, PageLink } from "~/components";

/**
 * The Home Page displays the status of the SpaceTraders API, allows the user
 * to create a new game, view the leaderboard, and view the announcements.
 */
export default async function HomePage() {
  const response = await getStatus();
  return (
    <main className="mb-16 flex flex-col items-center justify-center text-center">
      <Message
        text={
          <span className="flex flex-row">
            <span className="my-auto">
              {response.success ? response.data.status : response.error}
            </span>
            {response.success && (
              <Tag
                value={response.data.version}
                severity="success"
                className="ml-2"
                data-testid="version"
              />
            )}
          </span>
        }
        severity={response.success ? "success" : "error"}
        data-testid="status"
      />
      <div className="container flex flex-col items-center justify-center gap-12 px-4 pt-4">
        <h1
          className="text-5xl font-extrabold tracking-tight sm:text-[5rem]"
          data-testid="home-title"
        >
          Welcome,{" "}
          <span className="text-[hsl(220,100%,70%)]">Space Traders!</span>
        </h1>

        <p
          className="max-w-2xl text-center text-2xl font-thin"
          data-testid="home-description"
        >
          This is UI companion application for the{" "}
          <Link
            href="https://spacetraders.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-normal italic"
          >
            SpaceTraders API
          </Link>
        </p>

        <Announcements
          data={response.success ? response.data.announcements : undefined}
          data-testid="announcements"
        />
        <Leaderboards
          data={response.success ? response.data.leaderboards : undefined}
          data-testid="leaderboards"
        />
        <div className="flex flex-col justify-center gap-2 sm:flex-row">
          <PageLink
            href="/about"
            title="About"
            subtitle="Learn more about this game and the SpaceTraders API"
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
