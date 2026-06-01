import { test,expect } from "@playwright/test"

test("popups",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect (page.locator('[id="displayed-text"]')).toBeVisible()
    await page.click('[id="hide-textbox"]')
    await expect(page.locator('[name="show-hide"]')).toBeHidden()
    await page.locator("//button[text()='Mouse Hover']").hover()
    await page.click('//div[@class="mouse-hover-content"] /child::a[text()="Reload"]')
    await page.fill('[name="enter-name"]',"Dinesh VG")
    page.on("dialog",async alert=>{
        
        expect(alert.message("Hello dinesh, Are you sure you want to confirm?"))
       // alert.accept()
       alert.dismiss()
    })
    await page.click('[value="Alert"]')
await page.pause()
})