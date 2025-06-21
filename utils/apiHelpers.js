const axios = require('axios');
const serviceURLs = require('../conf/services');

class ApiHelpers {
  static headers = {
    'Content-Type': 'application/json'
  }

  static async createToken(username = 'admin', password = 'password123') {
    try {
      const request = {
        url: serviceURLs.authEndpoint,
        method: 'POST',
        data: {
          username,
          password,
        },
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to create token: ${error.message}`);
    }
  }

  static async getBookingIds() {
    try {
      const request = {
        url: serviceURLs.bookingEndpoint,
        method: 'GET',
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to get booking ids: ${error.message}`);
    }
  }

  static async getBookingById(id) {
    try {
      this.headers['Accept'] = 'application/json';
      const request = {
        url: `${serviceURLs.bookingEndpoint}/${id}`,
        method: 'GET',
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to get booking by id: ${error.message}`);
    }
  }

  static async getBookingByFirstname(firstname) {
    try {
      const request = {
        url: `${serviceURLs.bookingEndpoint}?firstname=${firstname}`,
        method: 'GET',
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to get booking by firstname: ${error.message}`);
    }
  }

  static async getBookingByLastname(lastname) {
    try {
      const request = {
        url: `${serviceURLs.bookingEndpoint}?lastname=${lastname}`,
        method: 'GET',
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to get booking by lastname: ${error.message}`);
    }
  }

  static async getBookingByFirstnameAndLastname(firstname, lastname) {
    try {
      const request = {
        url: `${serviceURLs.bookingEndpoint}?firstname=${firstname}&lastname=${lastname}`,
        method: 'GET',
        headers: this.headers,
      } 
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to get booking by firstname and lastname: ${error.message}`);
    }
  }

  static async getBookingByCheckinDate(checkinDate) {
    try {
      const request = {
        url: `${serviceURLs.bookingEndpoint}?checkin=${checkinDate}`,
        method: 'GET',
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to get booking by checkin date: ${error.message}`);
    }
  }

  static async getBookingByCheckoutDate(checkoutDate) { 
    try {
      const request = {
        url: `${serviceURLs.bookingEndpoint}?checkout=${checkoutDate}`,
        method: 'GET',
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to get booking by checkout date: ${error.message}`);
    }
  }

  static async getBookingByCheckinAndCheckoutDate(checkinDate, checkoutDate) {
    try {
      const request = {
        url: `${serviceURLs.bookingEndpoint}?checkin=${checkinDate}&checkout=${checkoutDate}`,
        method: 'GET',
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to get booking by checkin and checkout date: ${error.message}`);
    }
  }

  static async createBooking(bookingRequest) {
    try {
      this.headers['Accept'] = 'application/json';
      const request = {
        url: serviceURLs.bookingEndpoint,
        method: 'POST',
        headers: this.headers,
        data: bookingRequest,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to create booking: ${error.message}`);
    }
  }

  static async updateBooking(bookingId, bookingRequest) {
    try {
      const token = await this.createToken();
      this.headers['Accept'] = 'application/json';
      this.headers['Cookie'] = `token=${token.data.token}`;
      const request = {
        url: `${serviceURLs.bookingEndpoint}/${bookingId}`,
        method: 'PUT',
        headers: this.headers,
        data: bookingRequest,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to update booking: ${error.message}`);
    }
  }

  static async partialUpdateBooking(bookingId, bookingRequest) {  
    try {
      const token = await this.createToken();
      this.headers['Accept'] = 'application/json';
      this.headers['Cookie'] = `token=${token.data.token}`;
      const request = {
        url: `${serviceURLs.bookingEndpoint}/${bookingId}`,
        method: 'PATCH',
        headers: this.headers,
        data: bookingRequest,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to partial update booking: ${error.message}`);
    }
  }

  static async deleteBooking(bookingId) {
    try {
      const token = await this.createToken();
      this.headers['Cookie'] = `token=${token.data.token}`;
      const request = {
        url: `${serviceURLs.bookingEndpoint}/${bookingId}`,
        method: 'DELETE',
        headers: this.headers,
      }
      const response = await axios(request);
      return response;
    } catch (error) {
      throw new Error(`Failed to delete booking: ${error.message}`);
    }
  }
}

module.exports = ApiHelpers; 
