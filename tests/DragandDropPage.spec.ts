import { test, expect } from '../fixtures/fixtures';

test("open drag and drop link", async ({ page, homePage, draganddropPage }) => {
    expect(page.url()).toBe("https://practice.expandtesting.com/drag-and-drop");
})
test("drag block A to block B", async ({ page, homePage, draganddropPage }) => {
    await draganddropPage.drag_AtoB();
    const target = draganddropPage.blockB;
    await expect(target).toHaveText("A");
})