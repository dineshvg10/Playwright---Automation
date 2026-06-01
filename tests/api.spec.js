import {test,expect,request} from "@playwright/test"
test("playwright api",async({page})=>{
    const apicontext = await request.newContext()
    await apicontext.post("https://rahulshettyacademy.com/client/#/auth/login")
    await page.addInitScript(value =>{window.localStorage.setItem('token',value)},token)

})