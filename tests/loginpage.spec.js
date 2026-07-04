const { test, expect } = require('../fixtures/test-fixtures');

test('Valid login redirects to inventory page', async ({ page, loginPage }) => {
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page).toHaveTitle('Swag Labs');
});

test('Invalid login shows error message', async ({ page }) => {
  const { LoginPage } = require('../pageObjects/loginPage');
  const loginPage = new LoginPage(page);
  await loginPage.navigate('/');
  await loginPage.login('wrong_user', 'wrong_pass');
  await expect(loginPage.errorMessage).toBeVisible();
});
