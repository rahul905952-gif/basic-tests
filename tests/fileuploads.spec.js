const { test, expect } = require('@playwright/test');


test('file uploads', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle('Automation Testing Practice');

    // To take screenshots we have to give as foldername - screenshot/filename.png-firstscreenshot
    await page.screenshot({path :'screenshot/firstscreenshot.png'});

    // full page screenshot
    await page.screenshot({path :'screenshot/firstscreenshot2.png' , fullPage : true});

    // single file upload using input tag -- if this doesn't work then we can give // slashes in path
    //await page.locator('input[type="file"]').setInputFiles("C:\\Users\\USER\\Downloads\\anime-characters-attack-on-titan-vvl457p1w1nademm.webp");

    // if we have multiple same input tag then we can use nth() method
    // await page.locator('input[type="file"]').nth(0).setInputFiles("C:\\Users\\USER\\Downloads\\anime-characters-attack-on-titan-vvl457p1w1nademm.webp");

    // single upload using locator -- ex: id
    //  await page.locator('#singleFileInput').setInputFiles("C:\\Users\\USER\\Downloads\\anime-characters-attack-on-titan-vvl457p1w1nademm.webp");
    // await page.getByRole("button", {name: "Upload Single File"}).click();
    // await expect(page.locator('#singleFileStatus')).toContainText('anime-characters');

    // multiple document upload should be " , " separated with comma

    //await page.locator('input[type="file"]').nth(1).setInputFiles("C:\\Users\\USER\\Downloads\\anime-characters-attack-on-titan-vvl457p1w1nademm.webp", "C:\\Users\\USER\\Downloads\\mortal-kombat-subzero-fan-art-7k65wrhpyu2rsmoc.webp");
    //await page.pause();

});