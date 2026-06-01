//import {test,expect} from "@playwright/test"
test("newTest",async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    const userName =  page.locator('[id="username"]')
    const passWord = page.locator('[id="password"]')
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
    await userName.fill("rahulshettyacademy")
    await passWord.fill("learning")
    await page.click('[id="terms"]')
    await page.click('[class="btn btn-info btn-md"]')
    await page.pause()
})

//import {test,expect} from "@playwright/test"
test("newTest1",async({browser})=>{
   const context =  await browser.newContext()
   const page = await context.newPage()
   const UserName = page.locator('[name="username"]')
   const PassWord = page.locator('[name="password"]')
   const signbtn = page.locator('[type="submit"]')
   const user ="rahulshettyacademy"
   const pass ="learning"
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   await UserName.fill(user)
   await PassWord.fill(pass)
   await page.locator('[id="terms"]').check()
   await signbtn.click()
   await page.pause()

})

/*import {test,expect} from "@playwright/test"
test('test',async({browser})=>{
    const context= await browser.newContext()
    const page = await context.newPage()
    const UserName = page.locator('[placeholder="email@example.com"]')
    const PassWord = page.locator('[formcontrolname="userPassword"]')
    const SignButton = page.locator('[class="btn btn-block login-btn"]')
    const user = "dinesh1397@gmail.com"
    const pass = "dineshvg@10"
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
    await UserName.fill(user)
    await PassWord.fill(pass)
    await SignButton.click()
    const products = page.locator('[class="card-body"]')
    const ProductName = "iphone 13 pro"
    await products.locator('b').first().waitFor()
    const productsnumber = await products.count()
    for(let i=0;i<productsnumber;i++)
    {
     if(await products.nth(i).locator('b').textContent()===ProductName)
     {
       await products.nth(i).locator('button[style="float: right;"]').click()
       break 
     }  
    }
    await page.locator('[routerlink="/dashboard/cart"]').click()
    const ID = "#68a961959320a140fe1ca57e"
    const coupon= "rahulshettyacademy"
    const text = "* Coupon Applied"
    const id = await page.locator('[class="itemNumber"]').textContent()
    expect(ID.includes(id))
    await page.locator("//button[text()='Checkout']").click()
    await page.fill('//div[text()="CVV Code "] //following-sibling::input[@type="text"]',"123")
    await page.fill('//div[text()="Name on Card "] //following-sibling::input[@type="text"]',"DINESH")
    await page.fill('[name="coupon"]',coupon)
    await page.click('//button[text()="Apply Coupon"]')
    await expect(page.locator('[style="color: green;"]')).toHaveText(text)
    await expect(page.locator('[style="color: lightgray; font-weight: 600;"]')).toContainText(user)
    await expect(page.locator('[class*="untouched ng-pristine ng-valid"]')).toHaveValue(user)
   const dropcountry = " India"
   await page.locator('[placeholder="Select Country"]').pressSequentially('ind',{delay:250})
   const dropdown = page.locator('[class="ta-results list-group ng-star-inserted"]') 
   await dropdown.waitFor()
   const dropcount = await dropdown.locator('[class="ta-item list-group-item ng-star-inserted"]').count()
   for (let i=0;i<dropcount;i++)
   {
    if(await dropdown.locator('[class="ta-item list-group-item ng-star-inserted"]').nth(i).textContent()===dropcountry)

    {
        await dropdown.locator('[class="ta-item list-group-item ng-star-inserted"]').nth(i).click()
        break
    }
   }
    
    await page.click('[class="btnn action__submit ng-star-inserted"]')
    const message = " Thankyou for the order. "
    const OrderId =" | 6925f2a65008f6a9093a4066 | "
    const confo = await page.locator('[class="hero-primary"]').textContent()
    expect(confo.includes(message)).toBeTruthy()
    const orderid = await page.locator('//label[@class="ng-star-inserted"]').textContent()
    expect(OrderId.includes(orderid)).toBeTruthy()
    await page.click('[style="color: blue; cursor: pointer;"]')
    await page.locator('tbody').waitFor()
    const tablerows  = page.locator('tbody tr') 
    const tablerowscount = tablerows.count()
    for(let i=0;i<tablerowscount;i++)
    {
        const rowid = await tablerows.nth(i).locator('th').textContent()
        if(OrderId.includes(rowid))
        {
           await tablerows.nth(i).locator('button').click()
           break
        }
    }

    await page.pause()

})*/

import {test,expect} from "@playwright/test"
test.only('trail1',async({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login')
    const Username = page.locator('[id="userEmail"]')
    const Password = page.locator('[id="userPassword"]')
    const Loginbutton = page.locator('[value="Login"]')
    const user = "dinesh1397@gmail.com"
    const password = "dineshvg@10"
    await Username.fill(user)
    await Password.fill(password)
    await Loginbutton.click()
    const products = page.locator('[class="card-body"]')
    await products.first().waitFor()
    const productsCount = await products.count()
    const ProductName ="ADIDAS ORIGINAL"
    for(let i=0;i<productsCount;i++)
    {
        if(await products.nth(i).locator("b").textContent()===ProductName)
        {
          await products.nth(i).locator('[class="btn w-10 rounded"]').click()
          break
        }
    }
    await page.click('[routerlink="/dashboard/cart"]')
    const OrderId = await page.locator('div [class="itemNumber"]').textContent()
    console.log(OrderId);
    const name = await page.locator('[class="cartSection"] h3').textContent()
    console.log(name);
    expect(ProductName.includes(name)).toBeTruthy()
    await page.click('//button[text()="Checkout"]')
    const Cvv = "123"
    const Name = "Dinesh"
    const Coupon = "rahulshettyacademy"
    const Country =" India"
    await page.locator('//div[text()="CVV Code "] //following-sibling :: input[@type="text"]').fill(Cvv)
    await page.locator('//div[text()="Name on Card "] //following-sibling :: input[@type="text"]').fill(Name)
    await page.fill('[name="coupon"]',Coupon)
    await page.click('//button[text()="Apply Coupon"]')
    expect(await page.locator('[style="color: lightgray; font-weight: 600;"]').textContent()).toContain(user)
    await expect(page.locator('[class="input txt text-validated ng-untouched ng-pristine ng-valid"]')).toHaveValue(user)
    await page.locator('[placeholder="Select Country"]').pressSequentially('ind',{delay:150})
    const dropdown = page.locator('[class="ta-results list-group ng-star-inserted"]')
    await dropdown.waitFor()
    const dropCount = await dropdown.locator('[class="ta-item list-group-item ng-star-inserted"]').count()
    for(let i=0;i<dropCount;i++)
    {
        if(await dropdown.locator('[class="ta-item list-group-item ng-star-inserted"]').nth(i).textContent()===Country)
        {
           await dropdown.locator('[class="ta-item list-group-item ng-star-inserted"]').nth(i).click()
           break
        }
    }
    const acknowledgement = " Thankyou for the order. "
    await page.click('[class="btnn action__submit ng-star-inserted"]')
    await page.click('label[routerlink="/dashboard/myorders"]')
    await page.pause()
})







