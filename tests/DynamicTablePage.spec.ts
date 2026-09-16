import{test, expect} from '../fixtures/fixtures';

test("open dynamic pagination table", async ({page, dynamictablePage})=>{
    await dynamictablePage.click_dynamictable();
     expect(page.url()).toBe("https://practice.expandtesting.com/dynamic-pagination-table");
    })

test.only("to extract student names from table", async({page, dynamictablePage})=>{
    await dynamictablePage.student_name();
    

})