import {test,expect} from "@playwright/test"

test.only("single dropdown",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator('//label[@for="country"]//following::select[@id="country"]')
await page.locator('//label[@for="country"]//following::select[@id="country"]').selectOption('India')
//await page.locator('//label[@for="country"]//following::select[@id="country"]').selectOption({value:"India"})
//await page.locator('//label[@for="country"]//following::select[@id="country"]').selectOption({index:9})
await page.pause()
})

test("multiselect dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//select[@id="colors"]').selectOption(["Blue","white","yellow"])
    await page.pause()
})


test("suggestion dropdown",async({page})=>{
await page.goto("https://www.google.com/")
await page.locator('//textarea[@aria-controls="Alh6id"]').fill("India")
const locat = page.locator('//div[@class="erkvQe"]')
await locat.first().waitFor()
const alltext = await locat.allTextContents()
for(let i=0;i<alltext.length;i++){
    let eachtext = alltext[i]
    if(eachtext.includes("India national cricket team"))
    {
        await locat.nth(i).click()
    let eachtext = alltext[i]
    }
}
await page.pause()
})