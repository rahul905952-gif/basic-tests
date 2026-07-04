// fixtures/test-fixtures.js
const base = require('@playwright/test');
const { LoginPage } = require('../pageObjects/loginPage');
require('dotenv').config();

exports.test = base.test.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    //await loginPage.login(process.env.SAUCE_USERNAME || 'standard_user', process.env.SAUCE_PASSWORD || 'secret_sauce');
    await loginPage.login(process.env.SAUCE_USERNAME, process.env.SAUCE_PASSWORD);
    await use(loginPage);
  },
});

exports.expect = base.expect;
