import{test,expect} from "@playwright/test"
import login from "./json/login.json";

test("login",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/index.html")
    await page.fill('[data-test="username"]',login.user)
    await page.fill('[data-test="password"]',login.password)
    await page.click('[value="LOGIN"]')
})