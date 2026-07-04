// pageObjects/homePage.js
const { BasePage } = require('./basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.backpackLink     = page.locator('#add-to-cart-sauce-labs-backpack');
    this.bikeLightLink    = page.locator('#add-to-cart-sauce-labs-bike-light');
    this.boltTShirtLink   = page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
    this.fleeceJacketLink = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
    this.onesieLink       = page.locator('#add-to-cart-sauce-labs-onesie');
    this.redTShirtLink    = page.locator('//button[@id="add-to-cart-test.allthethings()-t-shirt-(red)"]');
  }

  async addAllProductsToCart() {
    await this.backpackLink.click();
    await this.bikeLightLink.click();
    await this.boltTShirtLink.click();
    await this.fleeceJacketLink.click();
    await this.onesieLink.click();
    await this.redTShirtLink.click();
  }
}

module.exports = { HomePage };
