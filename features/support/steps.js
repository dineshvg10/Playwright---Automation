import { Given,When,Then,Before } from "@cucumber/cucumber"; 
import {chromium,expect} from "@playwright/test";
import { before } from "node:test";
Before(async function(){
const browser = await chromium.launch({
            headless : false
           })
       const context =await browser.newContext()
        this.page = await context.newPage()
})
Given('login using given {string} and {string}', {timeout :100*1000},async function (username, password) {
           // Write code here that turns the phrase above into concrete actions         
          this.useremail = "dinesh1397@gmail.com"
          this.userpass = "dineshvg@10"
          this.products = this.page.locator('.card-body')
          this.productName = "ADIDAS ORIGINAL"
          this.cvv = "123"
          this.name = "DINESH VG"
          this.coupon = "rahulshettyacademy"
    await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await expect(this.page.locator('//em[text()="Rahul Shetty Academy"]')).toContainText("Rahul Shetty Academy")
    await this.page.fill('[id="userEmail"]',this.useremail)
    await this.page.fill('[id="userPassword"]',this.userpass)
    await this.page.click('[class="btn btn-block login-btn"]')
         });

         When('add {string} to cart', async function (productName) {
           await this.page.locator(".card-body b ").first().waitFor()
    this.productscount = await this.products .count()
    console.log(this.productscount);
    for(let i=0;i<this.productscount;i++)
    {  
      if(await this.products.nth(i).locator("b").textContent()===this.productName)
      {
        await this.products.nth(i).locator('[style="float: right;"]').click()
        break;
      }
    }
    await this.page.click('[routerlink="/dashboard/cart"]')
         });

          Then('check whether the {string} is showing in cart page', {timeout : 100*1000},async function (productName) {
          await expect (this.page.locator('[class="cartSection"] [class="itemNumber"]')).toContainText("#68a961719320a140fe1ca57c")
    await expect(this.page.locator('[class="cartSection"] h3')).toContainText(this.productName)
   await this.page.click("//button[text ()='Checkout']")
         });

          When('enter the valid details and place the order',{timeout : 100*1000},async function () {
           await this.page.locator('(//input[@class="input txt"])[1]').fill(this.cvv)
    await this.page.fill('(//input[@class="input txt"])[2]',this.name)
    await this.page.fill('[name="coupon"]',this.coupon)
    await this.page.click('[class*="btn btn-primary "]')
    await expect(this.page.locator('[style="color: green;"]')).toContainText("* Coupon Applied")
    await expect(this.page.locator('[style="color: lightgray; font-weight: 600;"]')).toContainText(this.useremail)
    await this.page.locator('[placeholder="Select Country"]').pressSequentially("ind")
   this.country = this.page.locator('[class*="ta-results "]')
     await this.country .waitFor()
     this.countrycount = await this.country .locator('[class*="ta-item list"]').count()
    this.selectcountry = " India"
    for(let i=0;i<this.countrycount;i++)
    {
        if(await this.country .locator('[class*="ta-item list"]').nth(i).textContent()===this.selectcountry)
        {
           await this.country .locator('[class*="ta-item list"]').nth(i).click()
           break;
        }

    }
    await this.page.click(' [class="btnn action__submit ng-star-inserted"]')
         });

          Then('check whether order is present in orderhistory page', {timeout : 100*1000},async function () {
          await expect(this.page.locator('[class="hero-primary"]')).toHaveText(" Thankyou for the order. ")
    this.orderid = await this.page.locator('label.ng-star-inserted').textContent()
    await this.page.click('[style="color: blue; cursor: pointer;"]')
    this.rows = this.page.locator('tbody tr')
    this.rowscount = await this.rows.count()
    for(let i=0;i<this.rowscount;i++)
    {
      this.id = await this.rows.nth(i).locator('th').textContent()
        if(this.orderid.includes(this.id))
        {
          await this.rows.nth(i).locator('text=View').click()
          break;
        }
    }
   this.productid = await this.page.locator('[class="col-text -main"]').textContent()
    expect(this.orderid.includes(this.productid))
    await this.page.click('[routerlink="/dashboard/"]') 
         });

