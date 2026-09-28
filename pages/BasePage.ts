import{Page} from '@playwright/test';

export class BasePage{
    constructor(protected page: Page){}

    async navigate(url: string): Promise<void>{
        await this.page.goto(url);
    }
    async getTitle(): Promise<string>{
        return await this.page.title();  
    }
    async waitforpageload():Promise<void>{
        return await this.page.waitForLoadState();
    }

    
}

