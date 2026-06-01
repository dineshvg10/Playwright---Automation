import {test,expect} from "@playwright/test"
test("screenshots",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page.screenshot({path:"tests/screenshot/"+"auto.png"})
    //await page.screenshot({path:"tests/screenshot/"+"autofullpage.png",fullPage:true})
      await page.locator('//div[@class="fauxborder-left header-fauxborder-left"]').screenshot({path:"tests/screenshot/"+"locat.png"})
})