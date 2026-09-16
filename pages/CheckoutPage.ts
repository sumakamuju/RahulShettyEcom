import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
    readonly cotnshppng: Locator;
    itemincart: Locator;
    removeblckberry: Locator;
    product: Locator;
    remove: Locator;

    constructor(page: Page) {
        super(page);
        //this.cotnshppng=page.getByRole('button', {name: ' Continue Shopping                        '});
        this.cotnshppng = page.locator(".btn-default");
        //this.itemincart=page.locator(".table-hover td div h4 a");
        this.itemincart = page.locator("h4.media-heading");
        this.removeblckberry = page.locator(".table-hover tbody td button").nth(1);
        this.remove = page.locator("h4.media-heading a", { hasText: 'Blackberry' }).locator(".btn-danger");
        this.product = page.getByText("Product");


    }

    async item_in_cart(): Promise<void> {
        // await this.itemincart.count();
        console.log(await this.itemincart.count());
        // const allproducts = this.itemincart;
        // console.log(await allproducts.allTextContents());
    }
    async remove_from_cart(): Promise<void> {
        //await this.removeblckberry.click();
        await this.remove.click();
    }
    async click_ctnshpng(): Promise<void> {
        await this.cotnshppng.click();
    }


}