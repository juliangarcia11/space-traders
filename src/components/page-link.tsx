import Link from "next/link";

type PageLinkProps = {
  href: string;
  title: string;
  subtitle: string;
  "data-testid": string;
};

/**
 * A link to another page with a title and subtitle.
 * Looks like a card. Used in the home page.
 */
export function PageLink({
  href,
  title,
  subtitle,
  "data-testid": dataTestId,
}: PageLinkProps) {
  return (
    <Link
      href={href}
      className="flex max-w-xs flex-col gap-4 rounded-xl bg-black/10 p-4 hover:bg-black/20 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      data-testid={dataTestId ?? "page-link"}
    >
      <h3 className="text-2xl font-bold">{title} →</h3>
      <div className="text-lg">{subtitle}</div>
    </Link>
  );
}
