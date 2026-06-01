 import {test,expect} from "@playwright/test"
 test("iframes",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
   // const locat =await page.frames()
    //console.log(locat.length);
    // for(let URL of locat){
      //  console.log(URL.url());
     
    const frame = page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"}) 
    await frame.fill('//input[@name="mytext1"]','playwright')
    await page.pause() 
     })

test.only("nested frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const fram = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await fram.locator('//input[@name="mytext3"]').fill("playwright")
    const child = fram.childFrames()
    await child[0].locator('(//div[@class="uHMk6b fsHoPb"])[3]').click()
    await page.pause()
})




