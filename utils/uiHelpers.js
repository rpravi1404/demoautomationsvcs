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

async function dragAndDrop(page, source, target) {
    await page.dragAndDrop(source, target);
}

async function uploadFile(page, filePath) {
    await page.setInputFiles(filePath);
}

async function selectOption(page, select, option) {
    await page.selectOption(select, option);
}

async function rightClick(page, element) {
    await page.click(element, { button: 'right' });
}

async function mouseHover(page, element) {
    await page.hover(element);
}

async function scrollToElement(page, element) {
    await page.evaluate((element) => {
        element.scrollIntoView();
    }, element);
}

async function scrollToBottom(page) {
    await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
    });
}

async function scrollToTop(page) {
    await page.evaluate(() => {
        window.scrollTo(0, 0);
    });
}

async function openLinkInNewTab(page, link) {
    await page.evaluate((link) => {
        window.open(link, '_blank');
    }, link);
}

async function closeTab(page) {
    await page.close(); 
}

async function getCurrentUrl(page) {
    return await page.url();
}

async function getTitle(page) {
    return await page.title();
}

async function getPageSource(page) {
    return await page.content();
}

async function waitForElementToBeVisible(page, element) {
    await page.waitForSelector(element, { state: 'visible' });
}

async function waitForSelector(page, selector) {
    await page.waitForSelector(selector);
}








module.exports = {
    fillInputField,
    clickButton,
    getTextContent
};