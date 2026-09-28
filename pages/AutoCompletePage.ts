import{ Page, Locator} from '@playwright/test';
import {BasePage} from './BasePage';

export class AutoCompletePage extends BasePage{
   readonly autocompletepg: Locator;
   readonly countryname: Locator;
   readonly autolist: Locator;
   
    constructor(page: Page){
        super(page);
        this.autocompletepg=page.getByRole('link', {name: 'Autocomplete'});
        this.countryname= page.getByPlaceholder("Country name");
        this.autolist=page.locator("#countryautocomplete-list div");

    }

    async click_autocomplete(){
        await this.autocompletepg.click();
    }
    async enter_cntryname(value: string){
        await this.countryname.fill(value);
    }

}