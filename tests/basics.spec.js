const {test, expect,chromium} = require('@playwright/test');

/*
test('basics' , async({page})=>{
await page.goto("https://practice-automation.com/");
//await expect(page).toHaveTitle("Learn and Practice Automation | automateNow");
await expect(page).toHaveURL("https://practice-automation.com/");

// filling formss

await page.getByRole("link", {name:"Form Fields"}).click();
await page.waitForLoadState('networkidle');

await page.getByTestId('name-input').fill('viper');
await page.getByLabel('Password').fill('sniper');



await page.waitForLoadState('networkidle');


});

//test('with fixture', async({page})=>{

*/


test('without fixture', async({})=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://facebook.com");


});

test('with fixture', async({})=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://google.com");
 
    const pages = context.pages();
    await pages[0].bringToFront();
    await pages[1].bringToFront();


});