import {test,expect} from "@playwright/test"


// test("browser launch",async({page})=>{

//await page.goto("https://www.facebook.com/")

 //})

 //import {test,expect} from "@playwright/test"

 test("website launch",async({page})=>
{
    await page.goto("https://www.amazon.in/ref=nav_logo")
})
