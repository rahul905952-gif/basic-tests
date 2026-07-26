// BasePage.js
class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async waitForElement(locator) {
        await locator.waitFor({ state: 'visible' });
    }
}

module.exports = { BasePage };
