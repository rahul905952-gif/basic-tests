const {test, expect, chromium} = require('@playwright/test');

test('browser context', async()=>{

const browser = await chromium.launch();
const context1 = await browser.newContext();
const context2 = await browser.newContext();

const page1 = await context1.newPage();
const page2 = await context2.newPage();

await page1.goto("https://www.saucedemo.com/");
await page1.fill("#user-name", "standard_user");
await page1.fill("#password", "secret_sauce");
await page1.click("#login-button");
await expect(page1).toHaveTitle('Swag Labs');


await page2.goto("https://www.saucedemo.com/");
await page2.fill("#user-name", "locked_out_user");
await page2.fill("#password", "secret_sauce");
await page2.click("#login-button");
await expect(page2).toHaveTitle('Swag Labs');

});


test('new page handle in context', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
   // const page2 = await context.newPage();
    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page2.goto("https://www.saucedemo.com/");


    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText("merrymoonmary").click()
    ]);

   await newPage.waitForLoadState('load');
   // console.log("New page URL:", newPage.url());
    await browser.close();
});
    
test('download', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.getByLabel('Enter Text:').fill('test');
    await page.locator('#generateTxt').click();

    const [download] = await Promise.all([
        page.waitForEvent('download'), page.locator('#txtDownloadLink').click()
    ]);
       await download.waitForLoadState('networkidle');

    
});
  


