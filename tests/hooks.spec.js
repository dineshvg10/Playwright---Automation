import {test,expect} from"@playwright/test"
test.beforeAll("starting the test",()=>{
    console.log("Test has been started");
})
test.beforeEach("hitting url",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
})
test("login1",async({page})=>{
    await page.fill('[id="user-name"]',"standard_user")
})
test("login2",async({page})=>{
    await page.fill('[id="user-name"]',"problem_user")
})
test("login3",async({page})=>{
    await page.fill('[id="user-name"]',"performance_glitch_user")
})

test.afterEach("password",async({page})=>{
    await page.fill('[id="password"]','secret_sauce')
    await page.click('[id="login-button"]')
    await page.click("//button[text()='Open Menu']")
    await page.click('//a[@id="logout_sidebar_link"]')
})
test.afterAll("cpompleted",()=>{
    console.log("test has been completed");
})