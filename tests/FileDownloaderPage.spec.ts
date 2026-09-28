import { test, expect } from '../fixtures/fixtures';
import fs from 'fs';

test("click on file download link ", async ({ page, homePage, filedownloadPage }) => {
    expect(page.url()).toBe("https://practice.expandtesting.com/download");

})

test("download file", async ({ page, homePage, filedownloadPage }) => {
    const downloadedFilePath = await filedownloadPage.download_file();
    expect(fs.existsSync(downloadedFilePath)).toBeTruthy();
    console.log("File downloaded successfully");


})