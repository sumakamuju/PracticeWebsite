import { Page, Locator } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

export class AuthenticatedPopupPage extends BasePage{
    readonly msglocator: Locator;


    constructor(page: Page){
        super(page);
        this.msglocator= page.getByRole('alert',{name:'Congratulations! You must have the proper credentials.'});



    }
    
}