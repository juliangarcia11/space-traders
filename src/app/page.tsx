import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
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

        <div className="flex flex-row gap-2 justify-center">
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

type PageLinkProps = {
  href: string;
  title: string;
  subtitle: string;
  'data-testid': string;
};

function PageLink(
  {href, title, subtitle, 'data-testid': dataTestId}: PageLinkProps
) {
  return (
    <Link
      href={href}
      className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      data-testid={dataTestId ?? 'page-link'}
    >
      <h3 className="text-2xl font-bold">{title} →</h3>
      <div className="text-lg">
        {subtitle}
      </div>
    </Link>
  );
}
