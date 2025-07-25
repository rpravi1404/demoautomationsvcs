async function fillInputField(page, placeholder, value) {
    const inputField = page.getByPlaceholder(placeholder);
    await inputField.fill(value);
}

async function clickButton(page, role, name) {
    const button = page.getByRole(role, { name });
    await button.click();
}

async function getTextContent(page, text) {
    const element = page.getByText(text);
    await element.waitFor({ state: 'visible' });
    return await element.textContent();
}

module.exports = {
    fillInputField,
    clickButton,
    getTextContent
};