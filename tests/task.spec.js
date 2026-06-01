import {test,expect} from "@playwright/test"

test.describe("group A",()=>{
 test("practice",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//label[@for="username"]/following::input[@type="text"]').fill("student")
    await page.locator('//div[@id="form"]/descendant::input[@type="password"]').fill("Password123")
    await page.locator('//button[text()="Submit"]').click()
    await expect(page.locator('//h1[@class="post-title"]')).toContainText("Logged In Successfully")
    await page.locator('//a[text()="Log out"]').click()
 })

 test("practice1",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//input[@id="username"]').fill("incorrectUser ")
    await page.locator('//input[@id="password"]').fill("Password123")
    await page.locator('//button[text()="Submit"]').click()
    await expect(page.locator('//div[@class="show"]')).toContainText("Your username is invalid!")
 })

 test("practice2",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('//div[@id="form"]/child::div/child::input[@type="text"]').fill("student")
    await page.locator('//div[@id="form"]/child::div/child::input[@type="password"]').fill("incorrectPassword ")
    await page.locator('//input[@type="password"]/following::button[@id="submit"]').click()
    await expect(page.locator('//div[text()="Your password is invalid!"]')).toContainText("Your password is invalid!")
 })

test("alerts ok",async({page})=>{
   await page.goto("https://demo.automationtesting.in/Alerts.html")
   await page.click('//li[@class="active"]//child::a[@class="analystic"]')
   page.on('dialog',async practice=>{
      expect(practice.message("I am an alert box!"))
      practice.accept()
   })
   await page.click('//button[@onclick="alertbox()"]')
   await page.pause()
})
test("alerts with ok & cancel ",async({page})=>{
   await page.goto("https://demo.automationtesting.in/Alerts.html")
   await page.click('//a[text()="Alert with OK & Cancel "]')
   page.on('dialog',async dialog=>{
      console.log(dialog.type())
      expect(dialog.message('Press a Button !'))
      dialog.accept()
   })
   await page.click('//button[text()="click the button to display a confirm box "]')
   await expect (page.locator('//p[@id="demo"]')).toContainText('Ok')
})
test("alerts with textbox",async({page})=>{
   await page.goto("https://demo.automationtesting.in/Alerts.html")
   await page.click('//a[contains(text(),"Textbox ")]')
   page.on('dialog',async dialog=>{
      console.log(dialog.type())
      expect (dialog.message("Please enter your name"))
      dialog.accept("VG")
      
   })
   await page.click('//button[@class="btn btn-info"]')
   await expect (page.locator('//p[@id="demo1"]')).toContainText("Hello VG")
})

test("register",async({page})=>{
})
})

test.only("uploads task ",async({page})=>{
   await page.goto("https://aspuploader.com/demo/form-singlefile.asp")
   await page.locator('//button[@id="myuploaderButton"]').setInputFiles('tests/screenshot/auto.png')
   //await page.locator('[style="width: 316px;"]').isVisible()
   page.on('dialog' ,async dialog=>{
     expect(dialog.message("5.png is uploaded"))
      dialog.accept()
   })
})



