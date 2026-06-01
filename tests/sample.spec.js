import {test,expect} from "@playwright/test"

test("built in loactors",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    const img = await page.getByAltText('company-branding')
    await expect(img).toBeVisible()
    await page.getByPlaceholder("Username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")
    await page.getByRole('button',{name:" Login "}).click()
    await page.pause()
})