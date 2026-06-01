import {expect} from "@playwright/test"
class fulltesting{
  constructor(page)
  {
  this.page = page
  this.loginlink = page.locator('[id="login2"]')
  this.user= page.locator('[id="loginusername"]') 
  this.pass = page.locator('[id="loginpassword"]')
  this.button = page.locator('[onclick="logIn()"]')
  }
  async gotologinlink()
  {
    await this.page.goto("https://www.demoblaze.com/index.html")
  }
  async login(username,password)
  {
    await this.loginlink.click()
    await this.user.fill(username)
    await this.pass.fill(password)
    await this.button.click()
  }
}
export default {fulltesting,fulltesting1};

class fulltesting1
{
  constructor(page)
  {
     this.productlist = page.locator()
  }
}







