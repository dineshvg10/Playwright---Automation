import {test,expect} from "@playwright/test"
 test("datepicker",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="datepicker"]').fill("8/7/2025")
    await page.locator('//input[@id="txtDate"]').click()
    await page.locator('//select[@class="ui-datepicker-month"]').selectOption({value:"0"})
    await page.locator('//select[@aria-label="Select year"]').selectOption({value:"2024"})
    await page.locator('//a[@data-date="13"]').click()
    
 })