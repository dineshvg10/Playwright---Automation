import{test,expect} from "@playwright/test"
import Swaglabs from "./json/swaglabs"
test("swags",async({page})=>{
    await page.goto("https://www.saucedemo.com/v1/")
    const obj = new Swaglabs(page)
    await obj.login("standard_user","secret_sauce")
    await obj.checkout()
    await obj.complete("Dinesh","VG","601201")
    await obj.assertion()    
    await page.pause()
})
