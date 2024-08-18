"use client";
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState,
} from "react";

export type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  changeTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Context & functions that toggle the site theme
 */
export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeType>("light");

  /**
   * Find the root 'html' element & add/remove the 'dark' class name
   */
  function changeTheme() {
    if (theme === "light") {
      document.querySelector("html")?.classList?.add?.("dark");
      setTheme("dark");
    } else {
      document.querySelector("html")?.classList?.remove?.("dark");
      setTheme("light");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * @returns ThemeContextType:
 *  - theme: The current theme (light/dark) the site is shown in
 *  - changeTheme: A function to toggle the theme
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
