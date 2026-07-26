const {test, expect} = require ('@playwright/test');

test('debugging with playwright' , async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("problem_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    // we can configure trace = on , so that once the test fails
    // npx playwright show-report open and see the ss, video, trace zip
    //Trace configuration → “I enable trace: 'on' in Playwright config so every run captures screenshots, DOM snapshots, and network logs.”

    //Debug mode → “I run tests with npx playwright test --debug to open the inspector, step through actions, and replay the trace viewer.”

});