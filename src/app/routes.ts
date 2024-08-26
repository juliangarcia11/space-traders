import type { MenuItem } from "primereact/menuitem";

type RoutingItem = Omit<MenuItem, "data"> & {
  data: {
    authRequired?: boolean;
    description: string;
    hiddenWhenAuthenticated?: boolean;
  };
};

/**
 * A list of all the routes in the app.
 */
export const ROUTES: Record<string, RoutingItem> = {
  HOME: {
    label: "Home",
    icon: "pi pi-home",
    url: "/",
    data: {
      description: "The main page",
      hiddenWhenAuthenticated: true,
    },
  },
  DASHBOARD: {
    label: "Dashboard",
    icon: "pi pi-chart-bar",
    url: "/dashboard",
    data: {
      authRequired: true,
      description: "View the dashboard",
    },
  },
  AGENTS: {
    label: "Agents",
    icon: "pi pi-users",
    url: "/agents",
    data: {
      authRequired: true,
      description: "View all the agents",
    },
  },
  ABOUT: {
    label: "About",
    icon: "pi pi-info",
    url: "/about",
    data: {
      description: "Learn more about this template",
      hiddenWhenAuthenticated: true,
    },
  },
  TEST: {
    label: "Test",
    icon: "pi pi-search",
    url: "/test",
    data: {
      description: "Test if we can fetch data from the SpaceTraders API",
    },
  },
};

export const ROUTE_LIST = Object.values(ROUTES);
