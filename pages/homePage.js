const { randomCheckinCheckoutDate } = require('../utils/commonUtils');

class HomePage {

    constructor(page) {
        this.page = page;
        this.checkinDate = page.locator('[for="checkin"] + .react-datepicker-wrapper .form-control');
        this.checkoutDate = page.locator('[for="checkout"] + .react-datepicker-wrapper .form-control');
        this.calendar = page.locator('.react-datepicker');
        this.calendarNextBtn = page.locator('.react-datepicker__navigation--next');
        this.calendarCurrentMonth = page.locator('.react-datepicker__current-month');
        this.selectDate = (date) => page.locator(`.react-datepicker__day--${date}`);
        this.checkoutDate = page.locator('[for="checkout"] + .react-datepicker-wrapper .form-control');
        this.rooms = page.locator('#rooms .row');
        this.roomsCount = this.rooms.locator('div.card-body h5');
        this.roomsLink = this.rooms.locator('div.card-footer a');
        this.doReservationButton = page.locator('#doReservation');
    }
    
    async chooseCheckinDate(page, checkinDate) {
        const dateAndMonth = checkinDate.split(', ')[0];
        const date = dateAndMonth.split(' ')[1].padStart(3, '0');
        const month = dateAndMonth.split(' ')[0];
        const year = checkinDate.split(', ')[1];
        await this.checkinDate.click();
        await this.calendar.isVisible();
        let currentMonthAndYear = await this.calendarCurrentMonth.textContent();
        let currentMonth = currentMonthAndYear.split(' ')[0];
        let currentYear = currentMonthAndYear.split(' ')[1];
        while (currentMonth !== month || currentYear !== year) {
            await this.calendarNextBtn.click();
            currentMonthAndYear = await this.calendarCurrentMonth.textContent();
            currentMonth = currentMonthAndYear.split(' ')[0];
            currentYear = currentMonthAndYear.split(' ')[1];
        }
        await this.selectDate(date).first().click();
    }

    async chooseCheckoutDate(page, checkoutDate) {
        const dateAndMonth = checkoutDate.split(', ')[0];
        const date = dateAndMonth.split(' ')[1].padStart(3, '0');
        const month = dateAndMonth.split(' ')[0];
        const year = checkoutDate.split(', ')[1];
        await this.checkoutDate.click();
        await this.calendar.isVisible();
        let currentMonthAndYear = await this.calendarCurrentMonth.textContent();
        let currentMonth = currentMonthAndYear.split(' ')[0];
        let currentYear = currentMonthAndYear.split(' ')[1];
        while (currentMonth !== month || currentYear !== year) {
            await this.calendarNextBtn.click();
            currentMonthAndYear = await this.calendarCurrentMonth.textContent();
            currentMonth = currentMonthAndYear.split(' ')[0];
            currentYear = currentMonthAndYear.split(' ')[1];
        }
        await this.selectDate(date).first().click();
    }

    async checkAvailability(page) {
        const { checkinDate, checkoutDate } = await randomCheckinCheckoutDate();
        await this.chooseCheckinDate(page, checkinDate);
        await this.chooseCheckoutDate(page, checkoutDate);
        await page.getByRole('button', { name: 'Check Availability' }).click();
    }

    async selectRoom(roomType) {
        const roomCount = await this.roomsCount.count();
        for (let i = 0; i < roomCount; i++) {
            const room = await this.roomsCount.nth(i).textContent();
            if (room === roomType) {
                await this.roomsLink.nth(i).click();
                break;
            }
        }
        await this.doReservationButton.click();
    }

}

module.exports = HomePage;