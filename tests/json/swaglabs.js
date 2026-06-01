import { expect } from "@playwright/test";

class Swaglabs{
    constructor(page){
        this.page=page;
        this.username =page.locator('[placeholder="Username"]')
        this.password = page.locator('[data-test="password"]')
        this.button = page.locator('[id="login-button"]')
        this.addtocart = page.locator('(//button[@class="btn_primary btn_inventory"])[1]')
        this.addtocart1 = page.locator('(//button[@class="btn_primary btn_inventory"])[5]')
        this.imgcheck = page.locator('[fill="currentColor"]')
        this.check = page.locator('[class="btn_action checkout_button"]')
        this.fname = page.locator('[class="checkout_info"] input[data-test="firstName"]')
        this.lname = page.locator('[class="checkout_info"] input[data-test="lastName"]')
        this.pincode = page.locator('[class="checkout_info"] input[placeholder="Zip/Postal Code"]')
        this.cont = page.locator('[type="submit"]')
        this.finish = page.locator('[class="btn_action cart_button"]')
        this.message = page.locator("//h2[text()='THANK YOU FOR YOUR ORDER']")
    }
    async login (user,pass)
    {
       await this.username.fill(user)
       await this.password.fill(pass)
       await this.button.click()
    }
    async checkout ()
    {
        await this.addtocart.click()
        await this.addtocart1.click()
        await this.imgcheck.click()
        await this.check.click()
    }
    async complete (Dinesh,VG,pin)
    {
        await this.fname.fill(Dinesh)
        await this.lname.fill(VG)
        await this.pincode.fill(pin)
        await this.cont.click()
        await this.finish.click()
    }
    async assertion ()
    {
        expect (await this.message).toContainText("THANK YOU")   
    }
}
export default Swaglabs;





