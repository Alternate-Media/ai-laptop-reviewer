import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      throw new Error(`Console error detected: ${msg.text()}`);
    }
  });
  page.on("pageerror", (error) => {
    throw new Error(`Page error detected: ${error.message}`);
  });
});

test("homepage has correct branding", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Laptop Verdict/);
  await expect(page.locator("text=Laptops, Unmasked.")).toBeVisible();
});

test("navigation to about page works", async ({ page }) => {
  await page.goto("/");
  await page.click("text=About");
  await expect(page).toHaveURL(/\/pages\/about\//);
  await expect(page.locator("h1")).toContainText("About Laptop Verdict");
});

test("methodology page displays hierarchy of trust", async ({ page }) => {
  await page.goto("/pages/methodology/");
  await expect(
    page.locator('h2:has-text("The Hierarchy of Trust")'),
  ).toBeVisible();
});
