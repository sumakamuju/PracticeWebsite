import { Page, Locator, FrameLocator } from '@playwright/test';
import {BasePage} from '../pages/BasePage';

export class IFramePage extends BasePage{

    readonly iframelink: Locator;
    readonly iframe: Locator;


    constructor(page : Page){
        super(page);
    
        this.iframelink=page.getByRole('link', {name: "IFrame"}).first();
        this.iframe=page.frameLocator("#iframe-youtube").locator("//iframe[@src ='https://www.youtube.com/embed/LcGHiFnBh3Y']");

    }
    async click_iframelink(){
        await this.iframelink.click();
    }
    async click_iframe(){ 
        await this.iframe.click();
    } 
    

}