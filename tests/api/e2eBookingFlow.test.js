const ApiHelpers = require('../../utils/apiHelpers');

describe('E2E Booking Flow', () => {
  it('should create a booking, fetch it, update it, partially update it, and delete it', async () => {
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
    const createBookingResponse = await ApiHelpers.createBooking(createBookingRequest);
    expect(createBookingResponse.status).toBe(200);
    const bookingId = createBookingResponse.data.bookingid;
    const getBookingResponse = await ApiHelpers.getBookingById(bookingId);
    expect(getBookingResponse.status).toBe(200);
    expect(getBookingResponse.data).toEqual(createBookingResponse.data.booking);
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
    const updateBookingResponse = await ApiHelpers.updateBooking(bookingId, updateBookingRequest);
    expect(updateBookingResponse.status).toBe(200);
    expect(updateBookingResponse.data).toEqual(updateBookingRequest);
    const partialUpdateBookingRequest = {
      firstname: 'Jimmy',
      lastname: 'Miller',
      totalprice: 100,
      depositpaid: false,
    }
    const partialUpdateBookingResponse = await ApiHelpers.partialUpdateBooking(bookingId, partialUpdateBookingRequest);
    expect(partialUpdateBookingResponse.status).toBe(200);
    expect(partialUpdateBookingResponse.data.firstname).toEqual(partialUpdateBookingRequest.firstname);
    expect(partialUpdateBookingResponse.data.lastname).toEqual(partialUpdateBookingRequest.lastname);
    expect(partialUpdateBookingResponse.data.totalprice).toEqual(partialUpdateBookingRequest.totalprice);
    expect(partialUpdateBookingResponse.data.depositpaid).toEqual(partialUpdateBookingRequest.depositpaid);
    const deleteBookingResponse = await ApiHelpers.deleteBooking(bookingId);
    expect(deleteBookingResponse.status).toBe(201);
    // const getBookingResponseAfterDelete = await ApiHelpers.getBookingById(bookingId);
    // expect(getBookingResponseAfterDelete.status).toBe(404);
  });
});         
