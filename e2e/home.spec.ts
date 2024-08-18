import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The new URL should be "/"
  await expect(page).toHaveURL("http://127.0.0.1:3000/");
  // The new page should contain a h1
  await expect(page.locator("h1")).toBeVisible();
});

test("should navigate to the about page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About' and click on it
  await page.getByTestId("about-link").click();
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("http://127.0.0.1:3000/about");
  // The new page should contain a h1 with "About"
  await expect(page.locator("h1")).toContainText("About");
});
