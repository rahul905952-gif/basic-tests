const { test, expect } = require('@playwright/test');


test('dropdown handling', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle('Automation Testing Practice');

     //Select by label/text using getbylabel
    //await page.getByLabel('Country').selectOption('Canada');
    //await page.getByLabel('Country').selectOption('france');
    //await page.getByLabel('Country').selectOption({ label: 'Canada' });

    // select by value using locator
   // await page.locator('select#country').selectOption({ value: 'australia' });
   // await page.locator('select#country').selectOption({ label: 'Canada' });

   // select by index
//await page.locator('select#country').selectOption({ index: 2 });




});


