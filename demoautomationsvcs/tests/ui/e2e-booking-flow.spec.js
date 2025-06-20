import { test, expect } from '@playwright/test';

test('Booking flow', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.waitForTimeout(5000);
  
});