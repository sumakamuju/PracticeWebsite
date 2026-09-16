import {test as base, expect} from '@playwright/test';
import { DynamicTablePage} from '../pages/DynamicTablePage';
import { ConfigManager } from '../config/ConfigManager';

type Fixtures= {dynamictablePage : DynamicTablePage;}

export const test= base.extend< Fixtures> ({

    dynamictablePage: async ({page}, use)=>{
    const dynamictablePage =new DynamicTablePage(page);
    await dynamictablePage.navigate( ConfigManager.base_url || "");
    await dynamictablePage.waitforpageload();
    await dynamictablePage.click_dynamictable();
    await use(dynamictablePage);}

})
export{expect}; 