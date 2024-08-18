import { test, expect } from "@playwright/test";

test("should navigate to the home page via page link", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // The new URL should be "/"
  await expect(page).toHaveURL("http://127.0.0.1:3000/");
  // The new page should contain a h1
  await expect(page.locator("h1")).toBeVisible();
});

test("should navigate to the about page via page link", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("about-link").click();
  await expect(page).toHaveURL("http://127.0.0.1:3000/about");
  await expect(page.locator("h1")).toContainText("About");
});
