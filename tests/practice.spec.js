const { test, expect } = require('@playwright/test');

test('browser context with multi user', async ({ browser }) => {

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();


    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await Promise.all([(async () => {
        await context1.goto('https://www.saucedemo.com/');
        await page1.fill('#user-name', 'standard_user');
        await page1.fill('#password', 'secret_sauce');
        await page1.click('#login-button');
        await expect(page1).toHaveURL(/inventory.html/);
    }),
    (async () => {
        await context2.goto('https://www.saucedemo.com/');

        await page2.fill('#user-name', 'problem_user');
        await page2.fill('#password', 'secret_sauce');
        await page2.click('#login-button');
        await expect(page2).toHaveURL(/inventory.html/);

    })
    ]);

    // Close contexts
    await Promise.all([
        context1.close(),
        context2.close()
    ]);
});