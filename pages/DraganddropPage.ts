import { Page, Locator } from '@playwright/test';
import { BasePage} from './BasePage';

export class DragnandDropPage extends BasePage{

    readonly draganddrop: Locator;
    readonly blockA: Locator;
    readonly blockB: Locator;

    constructor(page: Page){
        super(page);
    this.draganddrop=page.getByRole('link', {name: 'Drag and Drop'}).first();
    this.blockA=page.locator("#column-a");
    this.blockB=page.locator("#column-b");


    }
async click_draganddroplink(){
    await this.draganddrop.waitFor();
    await this.draganddrop.click();
}
async drag_AtoB(){
    const source=this.blockA;
    const target=this.blockB;
    await source.dragTo(target);
}

}