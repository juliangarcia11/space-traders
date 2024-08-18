import { test, expect } from "@playwright/test";

test("should navigate to the home page", async ({ page }) => {
  // Start from the about page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/about");
  // Find an element with the text 'Home' and click on it
  await page.getByTestId("home-link").click();
  // The new URL should be "/" (baseURL is used there)
  await expect(page).toHaveURL("http://127.0.0.1:3000/");
  // The new page should contain a h1 with testid "home-title"
  await expect(page.locator('[data-testid="home-title"]')).toBeVisible();
});
