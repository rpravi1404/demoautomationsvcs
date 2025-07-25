import { test, expect } from '@playwright/test';
const HomePage = require('../../pages/homePage.js');
const CheckoutPage = require('../../pages/checkoutPage.js');

test('Booking flow', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  const homePage = new HomePage(page);
  await homePage.checkAvailability(page);
  await homePage.selectRoom('Single');
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillBookingForm(page);
  const bookingConfirmation = await checkoutPage.getBookingConfirmation();
  expect(bookingConfirmation).toEqual('Booking Confirmed');
});
