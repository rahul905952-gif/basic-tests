const {test, expect} = require('@playwright/test');

test('handle iframes', async({page})=>{

//    "Yes — I mainly use page.frameLocator() because it auto-waits for the iframe and the element inside it to be ready, unlike page.frame() which doesn't wait and can return null if the iframe hasn't loaded yet. That reliability is why it's Playwright's recommended approach."


  await page.goto("https://practice-automation.com/iframes/");

  // by using name attribute
  //const frame1 = page.frameLocator('iframe[name="top-iframe"]');

  // by using src url attritube
  //const frame1 = page.frameLocator('iframe[src*="https://playwright.dev/"]');

  // by using id 
  const frame1 = page.frameLocator('#iframe-1');
  await frame1.getByRole("link", {name :'Get Started'}).click();

});

