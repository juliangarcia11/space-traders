import { test, expect } from "@playwright/test";

test("should navigate to the about page", async ({ page }) => {
  await page.goto("/about");
  await expect(page.locator('[data-testid="about-title"]')).toBeVisible();
  await expect(page.locator('[data-testid="api-description"]')).not.toBeEmpty();
  await expect(page.locator('[data-testid="app-description"]')).not.toBeEmpty();
});
