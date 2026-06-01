import {test,expect} from "@playwright/test"
test.skip("radio",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@value="male"]').check()
    await expect(page.locator('//input[@value="male"]')).toBeChecked()
    await expect(page.locator('//input[@value="female"]')).not.toBeChecked()
})
test.skip("one check box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="wednesday"]').check()
    await expect(page.locator('//input[@id="wednesday"]')).toBeChecked()
    await expect(page.locator('//input[@value="saturday"]')).not.toBeChecked()
    await page.locator('//input[@id="wednesday"]').uncheck()
    await expect(page.locator('//input[@id="wednesday"]')).not.toBeChecked()
    await page.pause()
})

test.only("multiselect",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const loc =['//input[@value="monday"]','//input[@value="wednesday"]','//input[@value="friday"]','//input[@value="saturday"]']
    for(let out of loc){
        await page.locator(out).check()
        await expect(page.locator(out)).toBeChecked()
    }
    await page.pause()
})
