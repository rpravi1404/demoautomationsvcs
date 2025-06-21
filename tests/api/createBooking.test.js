const ApiHelpers = require('../../utils/apiHelpers');

describe('Create Booking', () => {
  it('should create a booking', async () => {
    const createBookingRequest = {
        firstname: 'Jack',
        lastname: 'Sparrow',
        totalprice: 1221,
        depositpaid: true,
        bookingdates: {
          checkin: '2025-01-01',
          checkout: '2026-01-01'
        },
        additionalneeds: 'Breakfast'
      }
    const response = await ApiHelpers.createBooking(createBookingRequest);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('bookingid');
    expect(response.data.booking).toEqual(createBookingRequest);
  });
});
