import {test,expect} from "@playwright/test"
/*test("xpathlogin",async({page})=>{
    await page.goto("https://www.facebook.com/")
    await page.locator("//input[@placeholder='Email address or phone number']")
    await page.locator("//input[@aria-label='Password']")
    await page.locator("//button[text()='Log in']")
})*/

/*
xpath for login page 
 username ----//input[@type="text"]
 password ----//input[@type="password"]
 login button --//input[contains(@value,'Login')]
 forgot password --//a[text()='Forgot Password?']
 new register --//a[contains(text(),'New')]
 
 new user registration form
 
 username ---//input[@name="username"]
 password ---(//input[contains(@type,"password")])[1]
 confirm password ---(//input[contains(@type,"password")])[2]
 full name ---(//input[contains(@maxlength,"50")])[1]
 email---(//input[@maxlength="50"])[2]
 captcha ---//input[@maxlength="8"]
 checkbox ---//input[@type="checkbox"] 
 register button ---(//input[@class="reg_button"])[1]
 reset button --(//input[@class="reg_button"])[2]
*/ 
test("practice",async({page})=>{
    await page.goto("https://www.amazon.in/ref=nav_logo")
    await page.locator('(//a[@data-csa-c-type="link"])[5]').click()
    //await page.locator('//div[@class="nav-fill"]// following-sibling :: a[@data-csa-c-type="link"]').click()
})

