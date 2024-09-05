"use client";

import { Button } from "primereact/button";
import { useTheme } from "next-themes";

/**
 * A button that toggles the theme between light and dark using the useTheme hook.
 * @constructor
 */
export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      data-testid="theme-toggle"
      icon={theme === "light" ? "pi pi-moon" : "pi pi-sun"}
      size="small"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="my-auto mr-4 h-fit w-fit"
    />
  );
}
