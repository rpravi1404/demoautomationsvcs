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
        await this.firstNameInput.fill('John');
        await this.lastNameInput.fill('Doe');
        await this.emailInput.fill('john.doe@example.com');
        await this.phoneInput.fill('12345678901');
        await this.reserveNowButton.click();
    }

    async getBookingConfirmation() {
        await this.bookingConfirmationMessage.waitFor({ state: 'visible' });
        const bookingConfirmation = await this.bookingConfirmationMessage.textContent();
        return bookingConfirmation;
    }

}

module.exports = CheckoutPage;