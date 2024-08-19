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

test("should display the most credits and most submitted charts leaderboards", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");
  const mostCredits = await page
    .locator("data-testid=most-credits")
    .textContent();
  expect(mostCredits).toBeTruthy();
  const mostSubmittedCharts = await page
    .locator("data-testid=most-submitted-charts")
    .textContent();
  expect(mostSubmittedCharts).toBeTruthy();
});

test("should display the latest announcements in a carousel", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");
  const announcements = await page
    .locator("data-testid=announcements")
    .textContent();
  expect(announcements).toBeTruthy();
});
