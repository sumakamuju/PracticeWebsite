import{test, expect} from'../fixtures/fixtures';

test("open alert box", async({page, homePage, dialogPage})=>{
    
    page.on('dialog', async(dialog)=>{
        console.log(`dialog type is: ${dialog.type()}`)
        console.log(`dialog message : ${dialog.message()}`);
        await dialog.accept();
    }) 
    await dialogPage.alertbox.click();
    await page.waitForTimeout(10000);
    const confrmsg=dialogPage.alertboxmsg;
    expect(confrmsg).toHaveText("OK");

}) 
test("open confirm box", async({page, homePage, dialogPage})=>{
   
    page.on('dialog', async(dialog)=>{
        console.log(`dialog type is: ${dialog.type()}`);
        console.log(`dialog message: ${dialog.message()}`);
        await dialog.accept();
    })
    await dialogPage.confirmbox.click();
    await page.waitForTimeout(10000);
    const confrmsg=dialogPage.confirmboxmsg;
    expect(confrmsg).toHaveText("Ok");
})
test("open prompt box", async({page, homePage, dialogPage})=>{
    
    page.on('dialog', async(dialog)=>{
        console.log(`dialog type is: ${dialog.type()}`);
        console.log(`dialog message: ${dialog.message()}`);
        await dialog.accept("This is a prompt box");
    })
  
    await dialogPage.promptbox.click();
    await page.waitForTimeout(10000);
    const promptmsg=dialogPage.promptboxmsg;
    console.log(await promptmsg.innerText());
    expect(promptmsg).toHaveText("This is a prompt box");
})