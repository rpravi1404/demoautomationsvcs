async function chooseCheckinDate(page, checkinDate) {
    const dateAndMonth = checkinDate.split(', ')[0];
    const date = dateAndMonth.split(' ')[1].padStart(3, '0');
    const month = dateAndMonth.split(' ')[0];
    const year = checkinDate.split(', ')[1];
    await page.locator('[for="checkin"] + .react-datepicker-wrapper .form-control').click();
    await page.locator('.react-datepicker').isVisible();
    let currentMonthAndYear = await page.locator('.react-datepicker__current-month').textContent();
    let currentMonth = currentMonthAndYear.split(' ')[0];
    let currentYear = currentMonthAndYear.split(' ')[1];
    while (currentMonth !== month || currentYear !== year) {
        await page.locator('.react-datepicker__navigation--next').click();
        currentMonthAndYear = await page.locator('.react-datepicker__current-month').textContent();
        currentMonth = currentMonthAndYear.split(' ')[0];
        currentYear = currentMonthAndYear.split(' ')[1];
    }
    await page.locator(`.react-datepicker__day--${date}`).first().click();
}

async function chooseCheckoutDate(page, checkoutDate) {
    const dateAndMonth = checkoutDate.split(', ')[0];
    const date = dateAndMonth.split(' ')[1].padStart(3, '0');
    const month = dateAndMonth.split(' ')[0];
    const year = checkoutDate.split(', ')[1];
    await page.locator('[for="checkout"] + .react-datepicker-wrapper .form-control').click();
    await page.locator('.react-datepicker').isVisible();
    let currentMonthAndYear = await page.locator('.react-datepicker__current-month').textContent();
    let currentMonth = currentMonthAndYear.split(' ')[0];
    let currentYear = currentMonthAndYear.split(' ')[1];
    while (currentMonth !== month || currentYear !== year) {
        await page.locator('.react-datepicker__navigation--next').click();
        currentMonthAndYear = await page.locator('.react-datepicker__current-month').textContent();
        currentMonth = currentMonthAndYear.split(' ')[0];
        currentYear = currentMonthAndYear.split(' ')[1];
    }

    await page.locator(`.react-datepicker__day--${date}`).first().click();
}

async function selectRoom(page, roomType) {
    const roomCount = await page.locator('#rooms .row').locator('div.card-body h5').count();
    for (let i = 0; i < roomCount; i++) {
        const room = await page.locator('#rooms .row').locator('div.card-body h5').nth(i).textContent();
        if (room === roomType) {
            await page.locator('#rooms .row').locator('div.card-footer a').nth(i).click();
            break;
        }
    }
    await page.locator('#doReservation').click();   
}

async function fillBookingForm(page) {
    await page.getByPlaceholder('Firstname').fill('John');
    await page.getByPlaceholder('Lastname').fill('Doe');
    await page.getByPlaceholder('Email').fill('john.doe@example.com');
    await page.getByPlaceholder('Phone').fill('12345678901');
    await page.getByRole('button', { name: 'Reserve Now' }).click();
}

async function randomCheckinCheckoutDate() {
    const today = new Date();
    const startDate = new Date(today.getTime() + Math.floor(Math.random() * 100) * 24 * 60 * 60 * 1000);
    const endDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    const checkinDate = startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const checkoutDate = endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    return { checkinDate, checkoutDate };
}

async function checkAvailability(page) {
    const { checkinDate, checkoutDate } = await randomCheckinCheckoutDate();
    await chooseCheckinDate(page, checkinDate);
    await chooseCheckoutDate(page, checkoutDate);
    await page.getByRole('button', { name: 'Check Availability' }).click();
}

async function getBookingConfirmation(page) {
    await page.getByText('Booking Confirmed').waitFor({ state: 'visible' });
    const bookingConfirmation = await page.getByText('Booking Confirmed').textContent();
    return bookingConfirmation;
}

module.exports = {
    checkAvailability,
    selectRoom,
    fillBookingForm,
    getBookingConfirmation
}; 