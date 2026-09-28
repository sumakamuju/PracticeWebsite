import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class DynamicTablePage extends BasePage {

    readonly dynamictable: Locator;
    readonly studentname: Locator;
    readonly tablepg2: Locator;
    readonly pageno: Locator;

    constructor(page: Page) {
        super(page);
        this.dynamictable = page.getByRole('link', { name: "Dynamic Pagination Table" });
        this.studentname = page.locator("tbody tr td.sorting_1");
        this.tablepg2 = page.getByRole('link', { name: '2' });
        this.pageno = page.locator(".page-item a");

    }
    async click_dynamictable() {
        await this.dynamictable.waitFor({ state: 'visible' })
        await this.dynamictable.click();
    }
    // async student_name(): Promise<string[]>{
    //    const names=await this.studentname.allInnerTexts();
    //    console.log(names);
    //    return names;
    // }
    async student_name(): Promise<void> {
        this.waitforpageload();
        await this.studentname.first().waitFor();
        const names = this.studentname;
        const count = await names.count();
        console.log(`student names per page : ${count}`);

        await this.pageno.nth(1).waitFor();
        const pgno = this.pageno;
        const pgcount = await pgno.count();
        console.log(`no of pages in table to check (includes prv & next): ${pgcount}`);
        console.log("student names from the table");
        for (let j = 1; j <= 4; j++) {
            await pgno.nth(j).click();
            console.log(`clicked on page no : ${j}`);
            for (let i = 0; i < count; i++) {
                const names = await this.studentname.nth(i).allTextContents();
                console.log(names);

            }
        }
        /* for (let j = 2; j < 4; j++) {
           
            for (let i = 0; i < count; i++) {
                const names = await this.studentname.nth(i).allTextContents();
                console.log(names);
                {
                    if (i == 2 && j < 5) {
                        await pgno.nth(j).click();
                        console.log(`clicked on page no : ${j}`);
                    }
                }
            }
        } */
    }
}

