const { test, expect } = require('@playwright/test');


test('handling alerts', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle('Automation Testing Practice');
    
        // one alert msg with ok
        page.on('dialog', async dialog => {
           // console.log(dialog.message());
            await dialog.accept();
        })
        await page.locator('#alertBtn').click();
        /*
            // alert msg with accept and dismiss
            page.on('dialog', async dialog => {
            console.log(dialog.message());
        
            dialog.accept();
            })
            await page.locator('#confirmBtn').click();
        
    // alert msg with input field

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        dialog.accept('test');
    })
    await page.getByRole("button", { name: 'Prompt Alert' }).click();

*/
});