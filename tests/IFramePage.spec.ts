import { test,expect} from '../fixtures/fixtures';

test("open iframe page",async({page, homePage, iframePage})=>{
expect(page.url()).toBe("https://practice.expandtesting.com/iframe");
})