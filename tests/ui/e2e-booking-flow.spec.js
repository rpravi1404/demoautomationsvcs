import { test, expect } from '@playwright/test';
import { 
  selectRoom, 
  fillBookingForm, 
  checkAvailability,
  getBookingConfirmation
} from '../../utils/uiHelpers.js';

test('Booking flow', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await checkAvailability(page);
  await selectRoom(page, 'Single');
  await fillBookingForm(page);
  const bookingConfirmation = await getBookingConfirmation(page);
  expect(bookingConfirmation).toEqual('Booking Confirmed');
});
