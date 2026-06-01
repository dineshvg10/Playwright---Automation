import {test,expect} from "@playwright/test"

test("assertions",async({page})=>
{
await page.goto("https://testautomationpractice.blogspot.com/")
await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
await expect(page).toHaveTitle("Automation Testing Practice")
await expect(page.locator('//span[text()="For Selenium, Cypress & Playwright"]')).toBeVisible()
await expect(page.locator('//a[text()="PlaywrightPractice"]')).toContainText("Play")
await expect(page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]')).toBeEmpty()
await page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]').fill("playwright")
await expect(page.locator('//input[@id="Wikipedia1_wikipedia-search-input"]')).toHaveValue("playwright")
await expect(page.locator('//h2[text()="Dynamic Button"]')).toHaveText("Dynamic Button")
await expect(page.locator('(//div[@class="form-group"]//following-sibling ::input[@class="form-control"])[1]')).toHaveAttribute('placeholder','Enter Name')
await expect(page.locator('//button [@id="alertBtn"]')).toHaveId('alertBtn')
await expect(page.locator('//div[@class="form-group"]//following-sibling::input[@id="name"]')).toHaveClass('form-control')

})