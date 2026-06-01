import {test,expect} from "@playwright/test"
/*test('newtest',async({browser})=>{
    const context = await  browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    const UserName = page.locator('[formcontrolname="userEmail"]')
    const PassWord = page.locator('[formcontrolname="userPassword"]')
    const User = "dinesh1397@gmail.com"
    const Pass = "dineshvg@10"
    const products = page.locator('[class="card-body"]')
    const ProductName = "iphone 13 pro"
    await UserName.fill(User)
    await PassWord.fill(Pass)
    await page.click('[value="Login"]')
    await products.first().waitFor()
    const ProductsCount = await products.count()
    for(let i=0;i<ProductsCount;i++)
    {
        if(await products.nth(i).locator('b').textContent()===ProductName)
        {
           await products.nth(i).locator('[style="float: right;"]').click()
           break;
        }
    }
    await page.locator('[routerlink="/dashboard/cart"]').click()
    const OrderId = await page.locator('[class="itemNumber"]').textContent()
    await expect (page.locator('[class="cartSection"] h3')).toHaveText(ProductName)
     await page.locator("text ='Checkout'").click()
     const cvv = "123"
     const name = "VG"
     const coupon = "rahulshettyacademy"
     await page.locator("//div[text()='CVV Code '] //following-sibling::input").fill(cvv)
     await page.locator("//div[text()='Name on Card '] //following-sibling::input").fill(name)
     await page.locator('[name="coupon"]').fill(coupon)
     await page.click('[type="submit"]')
     await expect(page.locator('[class="item__title"]')).toHaveText(ProductName);
     await expect(page.locator('[style*="color: lightgray;"]')).toHaveText(User);
     await expect (page.locator('[class*="ng-touched"]')).toHaveText(User)
     await page.locator('(//select[@class="input ddl"])[1]').selectOption({value:"03"})
     await page.locator('(//select[@class="input ddl"])[2]').selectOption({value:"31"})

    await page.pause()
})*/

test.only("test2",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    const UserName = page.locator('[formcontrolname="userEmail"]')
    const PassWord = page.locator('[formcontrolname="userPassword"]')
    const User = "dinesh1397@gmail.com"
    const Pass = "dineshvg@10"
    await UserName.fill(User)
    await PassWord.fill(Pass)
    await page.click('[value="Login"]')
     const Products = page.locator('[class="card-body"]')
     await Products.first().waitFor()
     const ProductsCount = await Products.count()
     const ProductName = "ZARA COAT 3"
     for(let i=0;i<ProductsCount;i++)
     {
        if(await Products.nth(i).locator('b').textContent()===ProductName)
        {
          await Products.nth(i).locator('[style="float: right;"]').click()
          break;
        }
     }
    await page.click('[routerlink="/dashboard/cart"]')
    const OrderId = await page.locator('[class="cartSection"] [class="itemNumber"]').textContent()
    const retrived = await page.locator('[class="cartSection"] h3 ').textContent()
    expect(ProductName).toBe(retrived)
    await page.locator("text='Checkout'").click()
    await page.locator('(//select[@class="input ddl"])[1]').selectOption({value:"10"})
    await page.locator('(//select[@class="input ddl"])[2]').selectOption({value:"20"})
    const Cvv = "123"
    const Name = "VG"
    const Coupon = "rahulshettyacademy"
    const message = "* Coupon Applied"
    await page.locator("//div[text()='CVV Code '] //following-sibling::input").fill(Cvv)
    await page.locator("//div[text()='Name on Card '] //following-sibling::input").fill(Name)
    await page.locator('[name="coupon"]').fill(Coupon)
    await page.locator('[class="btn btn-primary mt-1"]').click()
    const Response = await page.locator('[style="color: green;"]').textContent()
    expect(Response).toBe(message)
    await expect(page.locator('[style*="font-weight: 600;"]')).toHaveText(User)
    await expect(page.locator('[class*="input txt text-validated ng-untouched"]')).toHaveValue(User)
    await page.pause()

})