const chance = require('chance');

class CheckoutPage  {

    constructor(page) {
        this.page = page;
        this.firstNameInput = page.getByPlaceholder('Firstname');
        this.lastNameInput = page.getByPlaceholder('Lastname');
        this.emailInput = page.getByPlaceholder('Email');
        this.phoneInput = page.getByPlaceholder('Phone');
        this.reserveNowButton = page.getByRole('button', { name: 'Reserve Now' });
        this.bookingConfirmationMessage = page.getByText('Booking Confirmed');
    }

    async fillBookingForm() {
        await this.firstNameInput.fill(chance.first());
        await this.lastNameInput.fill(chance.last());
        await this.emailInput.fill(chance.email());
        await this.phoneInput.fill(chance.phone());
        await this.reserveNowButton.click();
    }

    async getBookingConfirmation() {
        await this.bookingConfirmationMessage.waitFor({ state: 'visible' });
        const bookingConfirmation = await this.bookingConfirmationMessage.textContent();
        return bookingConfirmation;
    }

}

module.exports = CheckoutPage;