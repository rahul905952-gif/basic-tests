// pageObjects/basePage.js
class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(path = '/') {
    await this.page.goto(path);
  }

  
  async getTitle() {
    return this.page.title();
  }

  async getUrl() {
    return this.page.url();
  }

  async waitForSelector(selector) {
    await this.page.waitForSelector(selector);
  }

  async clickElement(selector) {
    await this.page.click(selector);
  }

  async fillInput(selector, value) {
    await this.page.fill(selector, value);
  }
}

module.exports = { BasePage };
