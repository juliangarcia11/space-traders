"use client";
import { useTheme } from "~/providers/theme";
import { Button } from "primereact/button";

/**
 * A button that toggles the theme between light and dark using the useTheme hook.
 * @constructor
 */
export function DarkModeToggle() {
  const { theme, changeTheme } = useTheme();
  return (
    <Button
      data-testid="theme-toggle"
      icon={theme === "light" ? "pi pi-moon" : "pi pi-sun"}
      size="small"
      onClick={changeTheme}
      className="my-auto mr-4 h-fit w-fit"
    />
  );
}
