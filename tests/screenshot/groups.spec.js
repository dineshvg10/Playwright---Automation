import{test,expect} from "@playwright/test"
test.describe("group1",()=>{ 
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
})

test.describe.only("group 2",()=>{
test("multiselect",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const loc =['//input[@value="monday"]','//input[@value="wednesday"]','//input[@value="friday"]','//input[@value="saturday"]']
    for(let out of loc){
        await page.locator(out).check()
        await expect(page.locator(out)).toBeChecked()
    }
    await page.pause()

test("one check box",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//input[@id="wednesday"]').check()
    await expect(page.locator('//input[@id="wednesday"]')).toBeChecked()
    await expect(page.locator('//input[@value="saturday"]')).not.toBeChecked()
    await page.locator('//input[@id="wednesday"]').uncheck()
    await expect(page.locator('//input[@id="wednesday"]')).not.toBeChecked()
    await page.pause()
})





})




})