import {Page, Locator} from '@playwright/test';
import{BasePage} from '../pages/BasePage';
import path from 'path';


export class FileDownloadPage extends BasePage{
    readonly filedownloader: Locator;
    readonly download: Locator;


    constructor(page: Page){
        super(page);

        //this.filedownloader=page.getByRole('link',{name: 'File Downloader'});
        this.filedownloader=page.locator('a[href="/download"]').first();
        this.download=page.getByRole('link', {name: '           xpath-css.png         '})
    }
    async click_filedownloader(): Promise<void>{

        console.log("URL:", this.page.url());
        await this.filedownloader.click();
    }
    async download_file(): Promise<string>{
        const downloadPromise= this.page.waitForEvent('download');
        await this.download.click();
        const download = await downloadPromise;
        const filePath=path.join(process.cwd(), 'downloads', 'download.png');
        await download.saveAs(filePath);
        return filePath;
    }


}