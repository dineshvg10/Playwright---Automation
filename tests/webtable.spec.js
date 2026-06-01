import {test,expect} from "@playwright/test"
test ("webtable",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   // const table = await page.locator('//table[@id="taskTable"]')
    const columncount = page.locator('//table[@id="taskTable"]/thead /tr /th')
   console.log(await columncount.count())
   const rowcount = page.locator('//table[@id="taskTable"] /tbody/tr')
   console.log(await rowcount.count())
})
test.only("webtable1",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const column = page.locator('//table[@id="productTable"]/thead/tr/th')
    const row =  page.locator('//table[@id="productTable"]/tbody/tr')
    console.log(await column.count());
    console.log(await row.count());
    
   /*const check = await row.filter({
        has:page.locator('td'),
        hasText:"Smartphone"
    })
await check.locator('//input[@type="checkbox"]').check()
await page.pause ()*/
   /* const check = await row.filter({
        has:page.locator('td'),
        hasText:/Smartphone|Laptop|Tablet/
    })
const count = await check.count()
for(let i=0;i<count;i++)
{
 await check.nth(i).locator('[type="checkbox"]').check()
}*/
const check = row.filter({
    has:page.locator('td')
})
const count = await check.count()
for(let i=0;i<count;i++){
    await check.nth(i).locator('[type="checkbox"]').check()
    const text = await check.nth(i).locator('td:nth-child(2)').textContent()
    console.log(text);
}
await page.pause()
})