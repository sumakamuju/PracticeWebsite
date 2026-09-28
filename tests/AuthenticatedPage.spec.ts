import { test, expect } from '../fixtures/fixtures';
import {Page} from '@playwright/test';

test("to open authenticated popup window", async({ browser, homePage, authenticatedpopupPage})=>{
const context =await browser.newContext({httpCredentials:{username:'admin', password: 'admin'}});
const page= await context.newPage();

await page.goto('https://practice.expandtesting.com/basic-auth');
//await page.goto('http://admin:admin@practice.expandtesting.com/basic-auth');

// await page.getByText('Basic Authentication (user and pass: admin)').click();
await page.waitForLoadState();
await page.waitForTimeout(5000);
const loginmsg=authenticatedpopupPage.msglocator;
await expect(loginmsg).toBeVisible;
console.log("Authenticated login successful");

}) 