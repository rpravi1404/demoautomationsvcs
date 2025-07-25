async function randomCheckinCheckoutDate() {
    const today = new Date();
    const startDate = new Date(today.getTime() + Math.floor(Math.random() * 100) * 24 * 60 * 60 * 1000);
    const endDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    const checkinDate = startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const checkoutDate = endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    return { checkinDate, checkoutDate };
}

module.exports = {
    randomCheckinCheckoutDate,
};