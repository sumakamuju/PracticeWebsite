import{test, expect} from '../fixtures/fixtures';
import{ chromium } from '@playwright/test';

test("open multiple tabs", async()=>
{
//expect(page.url()).toBe("https://practice.expandtesting.com/windows");
   const browser= await chromium.launch();
   const context= await browser.newContext();
   const parentPage= await context.newPage();
   await parentPage.goto("https://practice.expandtesting.com/");
   await parentPage.getByRole('link',{name:"Multiple Windows"}).click();
   await parentPage.waitForTimeout(5000);
   
   console.log(`current url: ${parentPage.url()}`);
  
  const [childPage]=await Promise.all([
    context.waitForEvent('page'), 
    parentPage.getByText("Click Here").click()
]);
   
   //approach 1: switch between pages and get titles(using context)
   const pages=context.pages();
   console.log("Number of pages created :", pages.length); 
   console.log("Title of the parent page: ", await pages[0].title());
   console.log("Title of the child page: ", await pages[1].title());
   
    //Approach 2: alternate
    console.log("Title of the parent page:", await parentPage.title());
    console.log("Title of the child page:", await childPage.title());
    
});  