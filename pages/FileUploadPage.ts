import{Page, Locator} from '@playwright/test';
import {BasePage} from '../pages/BasePage';
import path from 'path';  

export class FileUploadPage extends BasePage{
    readonly fileupload :Locator;
    readonly choosefile: Locator;
    readonly uploadbtn: Locator;
    readonly fileuploadmsg: Locator;


    constructor(page: Page){
        super(page);
        this.fileupload=page.getByText('File Upload').first();
        this.choosefile=page.locator("#fileInput");
        this.uploadbtn=page.getByRole('button',{name: 'Upload'});
        this.fileuploadmsg= page.getByText("File Uploaded!").last();

    }
    async click_fileupload(): Promise<void>{

        // await this.fileupload.isVisible();
        // console.log(await this.fileupload.isVisible());
        await this.fileupload.waitFor({state: 'visible', timeout: 9000});
        await this.fileupload.click();
    }
    async selct_file(){
       
        await this.choosefile.setInputFiles(String.raw`C:\Users\subha\OneDrive\Documents\FILE UPLOAD PRACTICE.txt`);
        await this.uploadbtn.click();
        
        
        

    }




} 