import { expect, test } from "@playwright/test";

test("should navigate to all pages via page header", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("page-header-home").click();
  await expect(page).toHaveURL("http://127.0.0.1:3000/");
  await page.getByTestId("page-header-about").click();
  await expect(page).toHaveURL("http://127.0.0.1:3000/about");
});

test("should route to the 404 page when a route is not found", async ({
  page,
}) => {
  await page.goto("/this-route-does-not-exist");
  await expect(page.locator("h2")).toContainText("404 Not Found");
  await expect(page.locator("p")).toContainText(
    "Could not find the requested resource.",
  );
});
