const { test, expect } = require('@playwright/test');


test('drag & drop', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle('Automation Testing Practice');
    await page.locator('#draggable').dragTo(page.locator('#droppable'));
    
});

// keyboard handle

test('keyboard handling', async({page})=>{

await page.goto("https://www.google.com");
await page.locator('#APjFqb').fill('playwright');
await page.keyboard.press('Enter');

});