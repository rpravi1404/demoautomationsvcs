const ApiHelpers = require('../../utils/apiHelpers');

describe('Delete Booking', () => {
  it('should delete a booking', async () => {
    const getBookingIdsResponse = await ApiHelpers.getBookingIds();
    const bookingId = Math.floor(Math.random() * getBookingIdsResponse.data.length);
    const response = await ApiHelpers.deleteBooking(bookingId);
    expect(response.status).toBe(201);
  });
});