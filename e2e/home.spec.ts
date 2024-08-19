import { test, expect } from "@playwright/test";

test("should display the current status of the SpaceTraders API", async ({
  page,
}) => {
  await page.goto("http://localhost:3000");
  const status = await page.locator("data-testid=status").textContent();
  expect(status).toBeTruthy();
});
