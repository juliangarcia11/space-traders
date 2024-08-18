import type { MenuItem } from "primereact/menuitem";

type RoutingItem = Omit<MenuItem, "data"> & {
  data: {
    description: string;
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
    },
  },
  ABOUT: {
    label: "About",
    icon: "pi pi-info",
    url: "/about",
    data: {
      description: "Learn more about this template",
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
