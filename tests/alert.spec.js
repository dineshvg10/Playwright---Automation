import {test,expect} from "@playwright/test"
test("alerts",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',async dialog =>{
        expect(dialog.message("I am an alert box!"))
        dialog.accept()

    })
    await page.click('//button[@onclick="myFunctionAlert()"]')
})

test("confirmation alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog',async confo=>{
        console.log(confo.type())
        expect(confo.message("Press a button!"))
        confo.dismiss()
    })
    await page.click('//button[text()="Confirmation Alert"]')
   await expect (page.locator('//p[text()="You pressed Cancel!"]')).toHaveText("You pressed Cancel!")

})

test("prompt alert",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")
   page.on('dialog',async pro=>{
    console.log(pro.type())
    console.log(pro.message())
    pro.accept("VG")
    
   })
      await page.click('//button[@id="promptBtn"]')
      await expect(page.locator('//p[@id="demo"]')).toContainText("How are you today?")

})