import { test, expect } from '../fixtures/fixtures';

test("open file upload page", async ({page, homePage, fileuploadPage})=>{

await fileuploadPage.click_fileupload();
await fileuploadPage.selct_file();
const uploadedmsg= fileuploadPage.fileuploadmsg;
await expect(uploadedmsg).toContainText("File Uploaded");
console.log(await fileuploadPage.fileuploadmsg.innerText());



})