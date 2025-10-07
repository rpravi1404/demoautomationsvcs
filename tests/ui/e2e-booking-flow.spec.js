import { test, expect } from '@playwright/test';
const HomePage = require('../../pages/homePage.js');
const CheckoutPage = require('../../pages/checkoutPage.js');

test('Booking flow Single', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  const homePage = new HomePage(page);
  await homePage.checkAvailability(page);
  await homePage.selectRoom('Single');
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillBookingForm(page);
  const bookingConfirmation = await checkoutPage.getBookingConfirmation();
  expect(bookingConfirmation).toEqual('Booking Confirmed');
});

test('Booking flow Suite', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  const homePage = new HomePage(page);
  await homePage.checkAvailability(page);
  await homePage.selectRoom('Suite');
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillBookingForm(page);
  const bookingConfirmation = await checkoutPage.getBookingConfirmation();
  expect(bookingConfirmation).toEqual('Booking Confirm');
});

test('Booking flow Double', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  const homePage = new HomePage(page);
  await homePage.checkAvailability(page);
  await homePage.selectRoom('Double');
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillBookingForm(page);
  const bookingConfirmation = await checkoutPage.getBookingConfirmation();
  expect(bookingConfirmation).toEqual('Booking Confirmed');
});


