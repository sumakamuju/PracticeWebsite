import{test, expect} from '../fixtures/fixtures'

test("open autocomplete page", async ({page, homePage, autocompletePage})=>{
    expect(page.url()).toBe("https://practice.expandtesting.com/autocomplete");
})

test("enter any country name in text box", async({page, homePage, autocompletePage})=>{
    await autocompletePage.enter_cntryname("Ne");
    const list=autocompletePage.autolist;
    console.log(`No. of auto suggestions: ${await list.count()}`);
    list.nth(1);
    console.log(`List of auto suggestions: ${await list.nth(1).allInnerTexts()}`);
    
})