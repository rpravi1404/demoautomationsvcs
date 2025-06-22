const ApiHelpers = require('../../utils/apiHelpers');

let bookingId = null;
let firstname = null; 
let lastname = null;
let checkinDate = null;
let checkoutDate = null;

describe('Get all bookings', () => {
  it('should get all bookings', async () => {
    const response = await ApiHelpers.getBookingIds();
    
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('bookingid');
    const randomIndex = Math.floor(Math.random() * response.data.length);
    bookingId = response.data[randomIndex].bookingid;
  });

  it('should get a booking by id', async () => {
    const response = await ApiHelpers.getBookingById(bookingId);
    
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('firstname');
    expect(response.data).toHaveProperty('lastname');
    expect(response.data).toHaveProperty('totalprice');
    expect(response.data).toHaveProperty('depositpaid');
    expect(response.data).toHaveProperty('bookingdates');
    expect(response.data.bookingdates).toHaveProperty('checkin');
    expect(response.data.bookingdates).toHaveProperty('checkout');
    expect(response.data).toHaveProperty('additionalneeds');
    firstname = response.data.firstname;
    lastname = response.data.lastname;
    checkinDate = response.data.bookingdates.checkin;
    checkoutDate = response.data.bookingdates.checkout;
  });

  it('should get a booking by firstname', async () => {
    const response = await ApiHelpers.getBookingByFirstname(firstname);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('bookingid');
  });

  it('should get a booking by lastname', async () => {
    const response = await ApiHelpers.getBookingByLastname(lastname);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('bookingid');
  });

  it('should get a booking by firstname and lastname', async () => {
    const response = await ApiHelpers.getBookingByFirstnameAndLastname(firstname, lastname);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('bookingid');
  });

  it('should get a booking by checkin date', async () => {
    const response = await ApiHelpers.getBookingByCheckinDate(checkinDate);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('bookingid');
  });

  it('should get a booking by checkout date', async () => {
    const response = await ApiHelpers.getBookingByCheckoutDate(checkoutDate);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);
    expect(response.data[0]).toHaveProperty('bookingid');
  });

  it('should get a booking by checkin and checkout date', async () => {
    const response = await ApiHelpers.getBookingByCheckinAndCheckoutDate(checkinDate, checkoutDate);
    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    // expect(response.data.length).toBeGreaterThan(0);
    // expect(response.data[0]).toHaveProperty('bookingid');
  });
});
