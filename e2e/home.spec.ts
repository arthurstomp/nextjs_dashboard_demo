import { test, expect } from '@playwright/test';

test('Home center text', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  expect(page).toContain('Material Tailwind React')
});

test('Home go to dashboard_demo', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
  await page.getByTestId('sidebar__item--dashboard').click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/dashboard_demo/);
  expect(page).toContain('Dashboard Demo')
});
