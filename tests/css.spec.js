import {test,expect} from "@playwright/test"
/*test("login by css",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //await page.locator('[placeholder="Username"]').fill("Admin")
    //await page.locator('[placeholder="Password"]').fill("admin123")
   // await page.locator('[type="submit"]').click()
   await page.locator('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]').click()
})*/

 test("insta login",async({page})=>{
    await page.goto("https://www.instagram.com/")
    await page.locator('[name="username"]').fill("dineshvg")
    await page.locator('[type="password"]').fill("Dinesh")
    await page.locator('[type="submit"]').click()  
 })
 test("forget password",async({page})=>{
       await page.goto("https://www.instagram.com/")
       await page.locator('[href="/accounts/password/reset/"]').click() 
 })
 test("facebook login",async({page})=>{
    await page.goto("https://www.instagram.com/")
    await page.locator('[class="xvs91rp xwhw2v2 x173jzuc"]').click()
 })


 


