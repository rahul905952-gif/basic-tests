const {test, expect} = require ('@playwright/test');

test('handle authentication' , async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("problem_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    // we will login once and we will reuse everywhere 
    await page.context().storageState({path : 'test_data/Auth.json'});
});

