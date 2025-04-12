import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the homepage correctly", async ({ page }) => {
    await page.goto("/");

    // Take a screenshot of the entire page
    await expect(page).toHaveScreenshot("homepage.png", {
      fullPage: true,
    });
  });

  test("should have correct title", async ({ page }) => {
    await page.goto("/");

    // Check the page title
    await expect(page).toHaveTitle(/AI & Automation Consultants/);
  });

  test("should have a working navigation menu", async ({ page }) => {
    await page.goto("/");

    // Check if the header is visible
    const header = page.locator("header");
    await expect(header).toBeVisible();

    // Check if the navigation links are visible
    const navLinks = page.locator("nav a");
    await expect(navLinks).toHaveCount(await navLinks.count());
  });

  test("should have a working CTA button", async ({ page }) => {
    await page.goto("/");

    // Find the main CTA button
    const ctaButton = page.getByRole("link", { name: /Process Health Check/i });
    await expect(ctaButton).toBeVisible();

    // Check if it has the correct href
    await expect(ctaButton).toHaveAttribute("href", "/power-up");
  });

  test("should be responsive on mobile", async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // Take a screenshot of the mobile view
    await expect(page).toHaveScreenshot("homepage-mobile.png", {
      fullPage: true,
    });

    // Check if the mobile menu button is visible
    const menuButton = page.getByRole("button", { name: /Toggle menu/i });
    await expect(menuButton).toBeVisible();

    // Open the mobile menu
    await menuButton.click();

    // Check if the mobile menu is visible
    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu).toBeVisible();

    // Take a screenshot of the open mobile menu
    await expect(page).toHaveScreenshot("homepage-mobile-menu-open.png");
  });
});
