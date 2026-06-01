import {test,expect} from "@playwright/test"

test("e2e",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.fill('[id="username"]',"rahulshettyacademy ")
    await page.fill('[id="password"]','learning')
    await page.click('[name="terms"]')
    await page.click('[name="signin"]')
    const out = await page.locator('[style*="block"]').textContent()
    expect(out).toContain("username")
    console.log(out);    
})
test.only("new",async({page})=>{
    const products = page.locator('.card-body')
    const productName ="iphone 13 pro"
    const user = "dinesh1397@gmail.com"
    const coupon = "rahulshettyacademy"
    const dropcountry = " Costa Rica"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.fill('[formcontrolname="userEmail"]',user)
    await page.fill('[formcontrolname="userPassword"]',"dineshvg@10")
    await page.click('[value="Login"]')
    await page.locator('.card-body b').first().waitFor()
    const count = await products.count()
    for(let i=0;i<count;i++)
    {
        if(await products.nth(i).locator("b").textContent()===productName)
        {
        await products.nth(i).locator('[style="float: right;"]').click()
        break
        }

    }
    await page.pause()
    await page.click('[routerlink="/dashboard/cart"]')
    await page.locator("div li").first().waitFor()
    const boolean = await page.locator("//h3[text()='iphone 13 pro']").isVisible()
    expect(boolean).toBeTruthy()
    await page.click("//button[text ()='Checkout']")
    //await expect(page.locator('[class*="input txt text-validated "]')).toContainText(user)
    await page.fill('(//input[@class="input txt"])[1]','123')
    await page.fill('(//input[@class="input txt"])[2]','Dinesh')
    await page.locator('[placeholder="Select Country"]').pressSequentially("co",{delay:100})
    const drop = page.locator('[class*="ta-results"]')
    await drop.waitFor()
    const dropcount = await drop.locator('[class*="ta-item list"]').count()
    for(let i=0;i<dropcount;i++)
    {
        if(await drop.locator('[class*="ta-item list"]').nth(i).textContent()===dropcountry)
        {
          await drop.locator('[class*="ta-item list"]').nth(i).click()
          break;
        }
        
    }
    await page.fill('[name="coupon"]',coupon)
    await page.click('[type="submit"]')
    await  expect(page.locator('[style*="color: lightgray"]')).toHaveText(user)
    await page.click('text =Place Order ')
    const id = await page.locator('//tr[@class="ng-star-inserted"]').textContent()
    await page.click('[style*="color: blue"]')
    await page.locator('tbody').waitFor()
    const rows = page.locator('tbody tr')
    const rowscount = await rows.count()
    for(let i=0;i<rowscount;i++)
    {
        const rowid = await rows.nth(i).locator('th').textContent()
        if(id.includes(rowid))
        {
          await rows.nth(i).locator('button').first().click()
          break;
        }
    }
     await page.pause()
    const finalid = await page.locator('[class="col-text -main"]').textContent()
    expect(id.includes(finalid)).toBeTruthy()
})


test("drops",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await page.fill('[id="username"]',"rahulshettyacademy")
    await page.fill('[id="password"]',"learning")
    await page.locator('select.form-control').selectOption("teach")
    //const dropdown = page.locator('select.form-control')
    //await dropdown.selectOption("consult")
    await page.pause()
})
test("windows",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
    const childwindow = page.locator('[href*="-request"]')
    const [page1] = await Promise.all([
        context.waitForEvent('page'),
        childwindow.click()
    ])
    const user = await page1.locator('[class="im-para red"]').textContent()
    const arraylist = await user.split("@")
    const actual = arraylist[1].split(".")[0]
    console.log(actual);
    await page.fill('[name="username"]',actual)
    await page.pause()
})

test("Newtest",async({page})=>{
    const productName = "iphone 13 pro"
    const products = page.locator('.card-body')
await page.goto('https://rahulshettyacademy.com/client/#/auth/login')    
await page.fill('[formcontrolname="userEmail"]',"dinesh1397@gmail.com")
await page.fill('[formcontrolname="userPassword"]',"dineshvg@10")
await page.click('[value="Login"]')in(id)
//await page.waitForLoadState('networkidle')
await page.locator('.card-body b').first().waitFor()
const titles = await page.locator('.card-body b').allTextContents()
console.log(titles);
//await page.locator('.card-body b').nth(2).textContent()
const count  = await products.count()
for(let i=0;i<count; i++){
    
    if(await products.nth(i).locator("b").textContent()  === productName)
    {
      await products.nth(i).locator("text= Add To Cart").click();
      break;
    }
}
await page.pause()
})