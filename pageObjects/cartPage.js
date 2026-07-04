// pageObjects/cartPage.js
const { BasePage } = require('./basePage');

class CartPage extends BasePage {
  constructor(page) {
    super(page);
    this.cartLink = page.locator('#shopping_cart_container');
    this.checkoutButton = page.locator('#checkout');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async goToCart() {
    await this.cartLink.click();
  }
}

module.exports = { CartPage };
