const { test, expect } = require('@playwright/test');


test('dropdown handling', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle('Automation Testing Practice');

    // by using id

    //await page.locator('#datepicker').fill('10/21/1993');

    // by placeholder
    
    await page.getByPlaceholder('Start Date').fill('1993-10-10');



});

