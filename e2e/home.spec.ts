import { test, expect } from "@playwright/test";

test("should display the basic status elements of the SpaceTraders API", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");
  const status = await page.locator("data-testid=status").textContent();
  expect(status).toBeTruthy();
  const version = await page.locator("data-testid=version").textContent();
  expect(version).toBeTruthy();
  // const resetDate = await page.locator("data-testid=reset-date").textContent();
  // expect(resetDate).toBeTruthy();
  const title = await page.locator("data-testid=home-title").textContent();
  expect(title).toBeTruthy();
  const description = await page
    .locator("data-testid=home-description")
    .textContent();
  expect(description).toBeTruthy();
});
