import{Page, Locator} from '@playwright/test';
import {BasePage} from '../pages/BasePage';

export class HomePage extends BasePage{
    readonly autocompletepg: Locator;

    constructor(page: Page){
        super(page);
        this.autocompletepg=page.getByRole('link', {name: 'Autocomplete'});


    }
    async click_autocomplete(){
        await this.autocompletepg.click();
    }
}