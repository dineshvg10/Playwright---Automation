//import {test,expect} from "@playwright/test"
/*test("practice",async({page})=>{
     const products = page.locator('[class="card-body"]')
    const productname = "IPHONE 13 PRO"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await page.fill('[formcontrolname="userEmail"]',"dinesh1397@gmail.com")
    await page.fill('[formcontrolname="userPassword"]',"Dineshvg@10")
    await page.click('[type="submit"]')
    await page.locator('[class="card-body"] b').first().waitFor()
    const alltitles = await page.locator('[class="card-body"]').allTextContents()
   // const products = page.locator('[class="card-body"] b')
    //const productname = "IPHONE 13 PRO"
    const count = await products.count()
    for(let i=0;i<count;i++)
{ 
    if (await products.nth(i).locator('b').textContent() === productname)
    {
    await products.nth(i).locator(" //button [text()=' Add To Cart']").click() 
    break;
    }      
}
  //await page.pause()
  await page.click('[routerlink="/dashboard/cart"]')
  await expect(page.locator("//h3[text()='IPHONE 13 PRO']")).toContainText(productname)
  await page.click('//div[@class="cartSection removeWrap"]/child::button[@class="btn btn-primary"]')
  await page.click('[placeholder="Select Country"]').pressSequentially("ind").selectOption('India')
  
  
  
  
  await page.click('[class="btnn action__submit ng-star-inserted"]')
  await expect (page.locator('[class="hero-primary"]')).toContainText("Thankyou")
  
})*/
/*test("practice 1",async({page})=>{
const username = "dinesh1397@gmail.com"
const productname = "ADIDAS ORIGINAL";
const products =  page.locator(".card-body")
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.fill("#userEmail",username)
await page.fill('[type="password"]',"Dineshvg@10")
await page.click('[type="submit"]')
await products.locator("b").first().waitFor()
const count = await products.count()
for (let i=0;i<count;++i)
{
  if( products.nth(i).locator("b").textContent()===productname)
  {
    await products.nth(i).click("text= Add To Cart")
    break;
  }
}
await page.click('[routerlink="/dashboard/cart"]')
await page.pause()

})*/

import { test,expect } from "@playwright/test"
test("practice 2",async({page})=>{
  const username = "standard_user"
  const password = "secret_sauce"
  await page.goto("https://www.saucedemo.com/v1/")
  await page.getByPlaceholder("Username").fill(username)
  await page.getByPlaceholder("Password").fill(password)
  await page.getByRole("button",{name : "Login"}).click()
  await page.locator("[class='inventory_container']").first().waitFor()
//  await page.locator('')
const loc = page.locator('[class="inventory_item_name"]').filter({hasText:"Test.allTheThings() T-Shirt (Red)"})
await loc.getByRole("button").click()
  await page.pause()
}) 







