import { expect, test } from "@playwright/test";

test("should navigate to all pages via page header", async ({ page }) => {
  await page.goto("/");
  await page.getByTestId("page-header-home").click();
  await expect(page).toHaveURL("http://127.0.0.1:3000/");
  await page.getByTestId("page-header-about").click();
  await expect(page).toHaveURL("http://127.0.0.1:3000/about");
  await page.getByTestId("page-header-test").click();
  await expect(page).toHaveURL("http://127.0.0.1:3000/test");
});
