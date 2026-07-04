// tests/cart.spec.js
const { test, expect } = require('../fixtures/test-fixtures');
const { HomePage } = require('../pageObjects/homePage');
const { CartPage } = require('../pageObjects/cartPage');
const { CheckoutPage } = require('../pageObjects/checkoutPage');
const { generateRandomString, generateRandomPostalCode } = require('../utils/helper');

test('products add to cart and checkout', async ({ page, loginPage }) => {
  await expect(page).toHaveURL(/inventory.html/);

  const homePage = new HomePage(page);
  //await homePage.addAllProductsToCart(); // all products added to cart
  await homePage.backpackLink.click(); // single product added to cart

  const cartPage = new CartPage(page);
  await cartPage.goToCart();
  await expect(page).toHaveURL(/cart.html/);
  await expect(cartPage.cartBadge).toHaveText('1');

  await cartPage.checkoutButton.click();
  await expect(page).toHaveURL(/checkout-step-one.html/);

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.fillCheckoutInformation(
    generateRandomString(),
    generateRandomString(),
    generateRandomPostalCode()
  );
  await checkoutPage.continueButton.click();
  await expect(page).toHaveURL(/checkout-step-two.html/);

  await checkoutPage.finishButton.click();
  await expect(page).toHaveURL(/checkout-complete.html/);
});
