import{test,expect} from "@playwright/test"
test.only("upload single file",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="singleFileInput"]').setInputFiles("tests/screenshot/auto.png")
    await page.click('//button[text()="Upload Single File"]')
    await expect (page.locator('//p[@id="singleFileStatus"]')).toContainText('Single file selected:')
    await page.pause()
})

test("upload multiple files",async({page})=>{ 
   
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(['tests/screenshot/autofullpage.png','tests/screenshot/locat.png'])
    await page.click('//button[text()="Upload Multiple Files"]')
    await expect(page.locator('//p[@id="multipleFilesStatus"]')).toContainText('Multiple files selected:')
    await page.pause()
})