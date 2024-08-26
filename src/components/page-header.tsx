import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";

import { api_urls } from "~/api";
import { ROUTE_LIST } from "~/app/routes";
import { DarkModeToggle, JoinDialogTrigger } from "~/components";

/**
 * A header for a page.
 * Used in the ./app/layout.
 */
export function PageHeader() {
  const authorized = !!cookies().get(api_urls.cookie)?.value;
  const routes = ROUTE_LIST.filter((r) => {
    // If the route requires authorization, only show it if the user is authorized
    return !r.data.authRequired || authorized;
  }).map((route) => {
    return {
      ...route,
      template: <PageHeaderItem route={route} />,
    };
  });

  return (
    <Menubar
      model={routes}
      end={
        <span className="flex flex-row gap-2">
          {!authorized && <JoinDialogTrigger />}
          <DarkModeToggle />
        </span>
      }
      data-testid="page-header"
      className="rounded-none shadow-md"
      style={{ height: "10%" }}
    />
  );
}

/**
 * A single item in the page header. If the route has a URL, it will be a link.
 */
function PageHeaderItem({ route }: { route: (typeof ROUTE_LIST)[0] }) {
  const btn = (
    <Button
      className="text-gray-700 hover:text-gray-900"
      label={route.label}
      icon={`${route.icon}`}
      data-testid={`page-header-${route.label?.toLowerCase()}`}
      text
    />
  );

  return route.url ? (
    <Link href={route.url} prefetch>
      {btn}
    </Link>
  ) : (
    btn
  );
}
