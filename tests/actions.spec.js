import{test,expect} from "@playwright/test"
test("Keyboard actions",async({page})=>{
await page.goto("https://gotranscript.com/text-compare")
await page.fill('//textarea[@placeholder="Paste one version of the text here."]',"PlayWright")
await page.keyboard.press('Control+A')
await page.keyboard.press('Control+C')
await page.keyboard.press('Tab')
await page.keyboard.press('Control+V')
await page.click('//input[@type="checkbox"]')
await page.click('//button[text()="Compare"]')
await page.pause()
})

test("mouse hover",async({page})=>{
   /* await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//button[@class="dropbtn"]').hover()
    await page.click('//a[text()="Mobiles"]')
    await page.pause()*/
    await page.goto("https://gotranscript.com/text-compare")
    await page.locator('//a[@id="dServices"]').hover()
    await page.click('(//div[@class="site-main-menu__dropdown-menu-services-menu-ul-price"])[1]')
     await page.pause()

})

test("double click",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.fill('//input[@id="field1"]','Playwright')
    await page.dblclick('//button[@ondblclick="myFunction1()"]')
    await expect(page.locator('//input[@id="field2"]')).toHaveValue("Playwright")
    await page.pause()
})
test("rightclick",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")
    await page.locator('//span[@class="context-menu-one btn btn-neutral"]').click({button:'right'})
    await page.pause()
})
 
test("mousewheel",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.mouse.wheel(0,3000)
    await page.mouse.wheel(0,-3000)
    await page.pause()

})
test.only("drag and drop",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const drag = await page.locator('//div[@id="draggable"]')
    const drop = await page.locator('//div[@id="droppable"]')
    await drag.dragTo(drop)
    await page.pause ()
})




