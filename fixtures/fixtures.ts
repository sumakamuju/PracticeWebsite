import { test as base, expect } from '@playwright/test';
import { ConfigManager } from '../config/ConfigManager';
import { HomePage } from '../pages/HomePage';
import { DynamicTablePage } from '../pages/DynamicTablePage';
import { AutoCompletePage } from '../pages/AutoCompletePage';
import { IFramePage } from '../pages/IFramesPage';
import { MultipleWindowsPage } from '../pages/MultipleWindows';
import { AuthenticatedPopupPage } from '../pages/AuthenticatedPage';
import { DialogPage } from  '../pages/DialogPage';
import { FileUploadPage} from '../pages/FileUploadPage';
import { FileDownloadPage } from '../pages/FileDownloadPage';
import { DragnandDropPage } from '../pages/DraganddropPage'


type Fixtures = {
    homePage: HomePage;
    dynamictablePage: DynamicTablePage;
    autocompletePage: AutoCompletePage;
    iframePage: IFramePage;
    multiplewindowsPage: MultipleWindowsPage;
    authenticatedpopupPage: AuthenticatedPopupPage;
    dialogPage: DialogPage;
    fileuploadPage: FileUploadPage;
    filedownloadPage: FileDownloadPage;
    draganddropPage: DragnandDropPage;
}

export const test = base.extend<Fixtures>({
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);
        await homePage.navigate(ConfigManager.base_url || "");
        await homePage.waitforpageload();
       // console.log(`Home Page Title : ${await homePage.getTitle()}`);
        await use(homePage);
    },

    dynamictablePage: async ({ page }, use) => {
        const dynamictablePage = new DynamicTablePage(page);
        await dynamictablePage.waitforpageload();
        await dynamictablePage.click_dynamictable();
      //  console.log(`Dynamic Pagination Table Page Title : ${await dynamictablePage.getTitle()}`);
        await use(dynamictablePage);
    },

    autocompletePage: async ({ page }, use) => {
        const autocompletePage = new AutoCompletePage(page);
        await autocompletePage.waitforpageload();
        await autocompletePage.click_autocomplete();
      //  console.log(`Autocomplete Page Title : ${await autocompletePage.getTitle()}`);
        await use(autocompletePage);
    },

    iframePage: async ({ page }, use)=>{
        const iframePage = new IFramePage(page);
        await iframePage.waitforpageload();
        await iframePage.click_iframelink();
        await use(iframePage);
    },

    multiplewindowsPage: async ({page}, use)=>{
        const multiplewindowsPage = new MultipleWindowsPage(page);
        await multiplewindowsPage.waitforpageload();
        //await multiplewindowsPage.click_multiwindowlink();
        await use(multiplewindowsPage);
    },

    authenticatedpopupPage: async ({page}, use)=>{
        const authenticatedpopupPage= new AuthenticatedPopupPage(page);
        await authenticatedpopupPage.waitforpageload();
        await use(authenticatedpopupPage);
    },
    dialogPage: async({page}, use)=>{
        const dialogPage=new DialogPage(page);
        await dialogPage.click_dialogpage();
        await dialogPage.waitforpageload();
        await use(dialogPage);
    },
    fileuploadPage: async({page}, use)=>{
        const fileuploadPage = new FileUploadPage(page); 
        await fileuploadPage.click_fileupload();
        await fileuploadPage.waitforpageload();
        await use(fileuploadPage);
    },
    filedownloadPage: async ({page}, use)=>{
        const filedownloadPage = new FileDownloadPage(page);
        await filedownloadPage.click_filedownloader();
        await filedownloadPage.waitforpageload();
        await use(filedownloadPage);
    },
    draganddropPage: async({page},use)=>{
        const draganddropPage= new DragnandDropPage(page);
        await draganddropPage.click_draganddroplink();
        await draganddropPage.waitforpageload();
        await use(draganddropPage);
    }

})
export { expect }; 