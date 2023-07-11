import { test, expect } from '@playwright/test';

test('Home center text', async ({ page }) => {
  await page.goto('http://localhost:3000/dashboard_demo');

  expect(await page.getByTestId('page-title').textContent()).toMatch("Dashboard Demo");
  expect(await page.screenshot()).toMatchSnapshot()
});
