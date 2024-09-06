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
export const ROUTES = {
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
  CONTRACTS: {
    label: "Contracts",
    icon: "pi pi-file",
    url: "/contracts",
    data: {
      authRequired: true,
      description: "View all your contracts",
    },
  },
  WAYPOINTS: {
    label: "Waypoints",
    icon: "pi pi-map",
    url: "/waypoints",
    data: {
      authRequired: true,
      description: "Look at the universe",
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
};

export const ROUTE_LIST = Object.values(ROUTES);
