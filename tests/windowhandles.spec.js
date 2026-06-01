import {test,expect, chromium} from "@playwright/test"
test("multipletabs",async({page})=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    console.log(await page1.title())
    await page1.waitForTimeout(3000)

    await page2.goto("https://www.orangehrm.com/")
     console.log(await page2.title())
    await page2.waitForTimeout(3000)
})

test("handle tabs",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(5000)
    console.log(await page.title());
    const [newtab] = await Promise.all([
        context.waitForEvent('page'),
        page.click('//a[text()="OrangeHRM, Inc"]')
    ])
    await newtab.waitForLoadState()
    await newtab.click("//a[text()='Solutions']")
    console.log(newtab.title())
})


test.only("page navigation",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.click('[alt="Mobiles & Tablets"]')
    await page.click('(//a[text()="iPhone 16"])[1]')
    await page.goBack()
    await page.goBack()
    await page.goForward()
    await page.pause()
})





