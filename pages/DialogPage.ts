import{Page, Locator } from '@playwright/test';
import {BasePage} from '../pages/BasePage';

export class DialogPage extends BasePage{
    readonly dialogpg: Locator;
    readonly alertbox: Locator;
    alertboxmsg: Locator;
    readonly confirmbox: Locator;
    confirmboxmsg: Locator;
    readonly promptbox: Locator;
    promptboxmsg: Locator;

    constructor(page: Page){
        super(page);
        this.dialogpg=page.getByRole('link', {name: 'JavaScript Dialogs'});
        this.alertbox=page.getByRole('button', {name: 'Js               Alert'});
        this.alertboxmsg=page.getByText("OK");
        this.confirmbox=page.getByRole('button', {name: 'Js              Confirm'});
        this.confirmboxmsg=page.getByText("Ok");
        this.promptbox=page.getByRole('button', {name: 'Js              Prompt'});
        this.promptboxmsg=page.locator("#dialog-response");
        
    }
    async click_dialogpage():Promise<void>{
        await this.dialogpg.click();
    }
}