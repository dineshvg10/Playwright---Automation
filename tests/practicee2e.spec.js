import {test,expect} from "@playwright/test"
test.only('practiceTrail',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    const UserName = page.locator('[formcontrolname="userEmail"]')
    const PassWord = page.locator('[formcontrolname="userPassword"]')
    const LoginButton = page.locator('[id="login"]')
    const username = "dinesh1397@gmail.com"
    const password = "dineshvg@10"
    await UserName.fill(username)
    await PassWord.fill(password)
    await LoginButton.click()
    const ProductName = "iphone 13 pro"
    const Products = page.locator('[class="card-body"]')
    await Products.first().waitFor()
    const ProductsCount = await Products.count()
    for(let i=0;i<ProductsCount;i++)
    {
        if(await Products.nth(i).locator('b').textContent()===ProductName)
        {
           await Products.nth(i).locator('[style="float: right;"]').click()
           break
        }
    }
    await page.locator('[routerlink="/dashboard/cart"]').click()
    const OrderId = await page.locator('[class="itemNumber"]').textContent()
    console.log(OrderId);
    expect(await page.locator('//h3[text()="iphone 13 pro"]').textContent()).toContain(ProductName)
    await page.locator('//button[text()="Checkout"]').click()
    expect(await page.locator('[style="color: lightgray; font-weight: 600;"]').textContent()).toContain(username)
    await expect ( page.locator('[class="input txt text-validated ng-untouched ng-pristine ng-valid"]')).toHaveValue(username)
    const Coupon = "rahulshettyacademy"
    const Name = "Dinesh"
    const Cvv = "789"
    await page.locator('//div[text()="CVV Code "] //following-sibling ::input[@class="input txt"]').fill(Cvv)
    await page.locator('//div[text()="Name on Card "] //following-sibling ::input[@class="input txt"]').fill(Name)
    await page.locator('[name="coupon"]').fill(Coupon)
    await page.click('[class="btn btn-primary mt-1"]')
    const Message = "* Coupon Applied"
    expect(await page.locator('[class="mt-1 ng-star-inserted"]').textContent()).toContain(Message)
    console.log(Message)
    await page.locator('[placeholder="Select Country"]').pressSequentially('ar',{delay:150})
    const drop = page.locator('[class="ta-results list-group ng-star-inserted"]')
    await drop.waitFor()
    const dropCountry = " Argentina"
    const dropCount = await drop.locator('[class="ta-item list-group-item ng-star-inserted"]').count()
    for(let i=0;i<dropCount;i++)
    {
        if(await drop.locator('[class="ta-item list-group-item ng-star-inserted"]').nth(i).textContent()===dropCountry)

        {
          await drop.locator('[class="ta-item list-group-item ng-star-inserted"]').nth(i).click()
          break
        }
    }
    await page.click('[class="btnn action__submit ng-star-inserted"]')
    const note = " Thankyou for the order. "
    await expect (page.locator('[class="hero-primary"]')).toHaveText(note)
    const Idtext = await page.locator('label[class="ng-star-inserted"]').textContent()
    expect (Idtext.includes(OrderId))
    await page.locator('label[routerlink="/dashboard/myorders"]').click()
    await page.locator('tbody').first().waitFor()
    const tableRows = page.locator('tbody tr')
    const rowCount = await tableRows.count()
    for(let i=0;i<rowCount;i++)
    {
        const rowId = await tableRows.nth(i).locator('th').textContent()
        if(OrderId.includes(rowId))
        {
          await tableRows.nth(i).locator("button").first().click()
        }
    }
     await page.pause()
    const assert3 = await page.locator('[class="col-text -main"]').textContent()
    expect(assert3.includes(OrderId));
    await page.pause()
    await expect (page.locator('(//div[text()=" Billing Address "] //following-sibling :: p)[1]')) .toHaveText(UserName)
    await expect ( page.locator('(//div[text()=" Billing Address "] //following-sibling :: p)[2]')).toHaveText(dropCountry)
    await expect ( page.locator('[class="title"]')).toHaveText(ProductName)
    await page.click('div[routerlink="/dashboard/myorders"]')
    await page.click('[routerlink="/dashboard/"]')
    await page.click('//button[text()=" Sign Out "]')
    await page.pause()
})
/*test('test',async({browser})=>{
const context = await browser.newContext()
const page = await context.newPage()
await page.goto('https://rahulshettyacademy.com/angularpractice/')
await page.click('[href="/angularpractice/shop"]')
const products = page.locator('[class="col-lg-3 col-md-6 mb-3"]')
await products.first().waitFor()
const productname = "Blackberry"
const productsCount = await products.count()
console.log(productsCount);
//await products.filter({hasText :'Blackberry'}).click('[class="btn btn-info"]')
for (let i=0;i<productsCount;i++)
{
 const productName = await products.nth(i).locator('h4').textContent()
  if(productName.includes(productname))
  {
    await products.nth(i).locator('[class="btn btn-info"]').click()
    break
  } 
}
await page.click('[class="nav-link btn btn-primary"]')
const selectedProduct = await page.locator('[class="media-body"] h4').textContent()
expect(selectedProduct.includes(productname))
await page.click('[class="btn btn-success"]')
const deliveryLocation = "India"
await page.locator('[id="country"]').pressSequentially('in',{delay:300})
const suggestions = page.locator('[class="suggestions"]')
await suggestions.first().waitFor()
const suggestionscount = await suggestions.locator("a").count()
for (let i=0;i<suggestionscount;i++)
{
  const countrynames =  await suggestions.locator("a").nth(i).textContent()
  if(countrynames.includes(deliveryLocation))
    {
      await  await suggestions.locator("a").nth(i).click() 
      break
    }  
}
await page.locator('[for="checkbox2"]').click()
await page.click('[value="Purchase"]')
const acknowledgement = " Thank you! Your order will be delivered in next few weeks :-)."
const notify = await page.locator('[class="alert alert-success alert-dismissible"]').textContent()
expect (notify.includes(acknowledgement)).toBeTruthy()


await page.pause()
})*/