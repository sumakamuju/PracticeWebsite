import {Page, Locator} from '@playwright/test';
import { BasePage } from '../pages/BasePage';

export class MultipleWindowsPage extends BasePage{

    readonly multiwindowlink: Locator;
    readonly newwindow: Locator;

    constructor(page : Page){
        super(page);

        this.multiwindowlink=page.getByRole('link',{name:"Multiple Windows"});
        this.newwindow= page.getByText("Click Here");


    }
    async click_multiwindowlink(){
        await this.multiwindowlink.click();
    }
    async click_newwindow(){
        await this.newwindow.click();
    }
}
