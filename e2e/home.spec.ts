import { test, expect } from '@playwright/test';

test('Home center text', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  expect(await page.screenshot()).toMatchSnapshot()

  expect(await page.getByTestId('page-title').textContent()).toMatch("Material Tailwind + Next.js + TS");
});

test('Home go to dashboard_demo', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('sidebar__item--dashboard').click();

  await expect(page).toHaveURL(/dashboard_demo/);
  await page.waitForTimeout(1000)
  expect(page.getByText('Dashboard Demo')).not.toBeNull
});
