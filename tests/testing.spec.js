import { test,expect} from "@playwright/test"
import {fulltesting,fulltesting1} from "./json/end2end"
test("test 1",async({browser})=>{
    const context = await browser.newContext()
    const page =  await  context.newPage()
    const useremail = "dinesh1397@gmail.com"
    const userpass = "dineshvg@10"
    const products = page.locator('.card-body')
    const productName = "ADIDAS ORIGINAL"
    const cvv = "123"
    const name = "DINESH VG"
    const coupon = "rahulshettyacademy"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await expect(page.locator('//em[text()="Rahul Shetty Academy"]')).toContainText("Rahul Shetty Academy")
    await page.fill('[id="userEmail"]',useremail)
    await page.fill('[id="userPassword"]',userpass)
    await page.click('[class="btn btn-block login-btn"]')
    await page.locator(".card-body b ").first().waitFor()
    const productscount = await products.count()
    console.log(productscount);
    for(let i=0;i<productscount;i++)
    {  
      if(await products.nth(i).locator("b").textContent()===productName)
      {
        await products.nth(i).locator('[style="float: right;"]').click()
        break;
      }
    }
    await page.click('[routerlink="/dashboard/cart"]')
    await expect (page.locator('[class="cartSection"] [class="itemNumber"]')).toContainText("#68a961719320a140fe1ca57c")
    await expect(page.locator('[class="cartSection"] h3')).toContainText(productName)
    await page.click('text = Checkout')
    await page.locator('(//input[@class="input txt"])[1]').fill(cvv)
    await page.fill('(//input[@class="input txt"])[2]',name)
    await page.fill('[name="coupon"]',coupon)
    await page.click('[class*="btn btn-primary "]')
    await expect(page.locator('[style="color: green;"]')).toContainText("* Coupon Applied")
    await expect(page.locator('[style="color: lightgray; font-weight: 600;"]')).toContainText(useremail)
    await page.locator('[placeholder="Select Country"]').pressSequentially("ind")
    const country = page.locator('[class*="ta-results "]')
     await country.waitFor()
     const countrycount = await country.locator('[class*="ta-item list"]').count()
    const selectcountry = " India"
    for(let i=0;i<countrycount;i++)
    {
        if(await country.locator('[class*="ta-item list"]').nth(i).textContent()===selectcountry)
        {
           await country.locator('[class*="ta-item list"]').nth(i).click()
           break;
        }

    }
    await page.click(' [class="btnn action__submit ng-star-inserted"]')
    await expect(page.locator('[class="hero-primary"]')).toHaveText(" Thankyou for the order. ")
    const orderid = await page.locator('label.ng-star-inserted').textContent()
    await page.click('[style="color: blue; cursor: pointer;"]')
    const rows = page.locator('tbody tr')
    const rowscount = await rows.count()
    for(let i=0;i<rowscount;i++)
    {
      const id = await rows.nth(i).locator('th').textContent()
        if(orderid.includes(id))
        {
          await rows.nth(i).locator('text=View').click()
          break;
        }
    }
    const productid = await page.locator('[class="col-text -main"]').textContent()
    expect(orderid.includes(productid))
    await page.click('[routerlink="/dashboard/"]') 
    await page.pause()
})
test("test 2",async({page})=>{
  await page.goto("https://rahulshettyacademy.com/angularpractice/")
  await page.locator('[class="blinkingText"]').isVisible()
  await page.getByRole('link',{name:'Shop'}).click()
  const productName="Nokia Edge"
  const productList = page.locator('[class="card h-100"]')
  const productListCount = await productList.count()
  for(let i=0;i<productListCount;i++)
  {
    if(await productList.nth(i).locator("h4 a").textContent()===productName)
    {
       await productList.nth(i).locator('[class="btn btn-info"]').click()
       break
    }
  }
  await page.click('[class="nav-link btn btn-primary"]')
  const name = await page.locator('[class="media-body"]  h4').textContent()
  expect(name.includes(productName))
  await page.click('[class="btn btn-success"]')
  const country = "India"
  await page.locator('[id="country"]').pressSequentially("Ind")
  const suggestions = page.locator('[class="suggestions"]')
  await suggestions.first().waitFor()
  const suggestionscount = await suggestions.locator("li").count()
  for(let i=0;i<suggestionscount;i++)
  {
    if(await suggestions.locator('//a[text()="India"]').nth(i).textContent()===country)
    {
      await suggestions.locator('//a[text()="India"]').nth(i).click()
       break;
    }
  }
 await page.locator('text =             I agree with the ').check()
 await expect(page.locator('[type="checkbox"]')).toBeChecked()
 const sucess = "Thank you!"
 await page.locator('[value="Purchase"]').click()
 const message = await page.locator('text = Thank you! Your order will be delivered in next few weeks :-).         ').textContent()
expect( message.includes(sucess))
 await page.pause()
})



test.only("fulltesting",async({page})=>{
  const obj = new fulltesting(page)
  await obj.gotologinlink();
  await obj.login("dineshvg","dineshvg")
  const obj1 = new fulltesting1(page)

})
