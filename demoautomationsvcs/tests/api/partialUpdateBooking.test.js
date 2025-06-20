const ApiHelpers = require('../../utils/apiHelpers');

describe('Partial Update Booking', () => {
  it('should partial update a booking', async () => {
    const partialUpdateBookingRequest = {
        firstname: 'Jimmy',
        lastname: 'Miller'
      }
    const getBookingIdsResponse = await ApiHelpers.getBookingIds();
    const bookingId = Math.floor(Math.random() * getBookingIdsResponse.data.length);
    const response = await ApiHelpers.partialUpdateBooking(bookingId, partialUpdateBookingRequest);
    expect(response.status).toBe(200);
    expect(response.data.firstname).toEqual(partialUpdateBookingRequest.firstname);
    expect(response.data.lastname).toEqual(partialUpdateBookingRequest.lastname);
  });
});