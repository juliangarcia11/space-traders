import {
  test,
  expect
} from "@playwright/test";

test("should connect to the API", async ({ page }) => {
  await page.goto("/test");
  await expect(page.locator("h1")).toHaveText("Test Page");
  await expect(page.getByTestId("api-res")).toBeVisible();
  await expect(page.locator("pre")).not.toHaveText("");
})
