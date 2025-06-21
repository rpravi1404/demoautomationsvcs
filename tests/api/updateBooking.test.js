const ApiHelpers = require('../../utils/apiHelpers');

describe('Update Booking', () => {
  it('should update a booking', async () => {
    const updateBookingRequest = {
      firstname: 'John',
      lastname: 'Doe',
      totalprice: 100,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-01-01',
        checkout: '2026-01-01'
      },
      additionalneeds: 'Breakfast'
    }
    const getBookingIdsResponse = await ApiHelpers.getBookingIds();
    const bookingId = Math.floor(Math.random() * getBookingIdsResponse.data.length);
    const response = await ApiHelpers.updateBooking(bookingId, updateBookingRequest);
    expect(response.status).toBe(200);
    expect(response.data).toEqual(updateBookingRequest);
  });
});
