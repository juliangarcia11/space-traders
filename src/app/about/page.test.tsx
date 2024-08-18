import { render, screen } from "@testing-library/react";
import AboutPage from "~/app/about/page";
import { ThemeProvider } from "~/providers/theme";

describe("AboutPage", () => {
  beforeEach(() => {
    render(
      <ThemeProvider>
        <AboutPage />
      </ThemeProvider>,
    );
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders a button with the text 'Home'", () => {
    const button = screen.getByRole("button", { name: /home/i });

    expect(button).toBeInTheDocument();
  });

  it("renders a theme toggle button", () => {
    const button = screen.getByTestId("theme-toggle");

    expect(button).toBeInTheDocument();
  });

  it("theme toggle button toggles the theme", () => {
    const button = screen.getByTestId("theme-toggle");
    const html = document.querySelector("html");

    expect(html).not.toHaveClass("dark");
    button.click();
    expect(html).toHaveClass("dark");
  });
});
