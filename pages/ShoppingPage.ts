import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ShoppingPage extends BasePage {

    readonly iphonex: Locator;
    readonly iphoneprice: Locator;
    readonly addtocartiphone: Locator;
    readonly nokiaedge: Locator;
    readonly addtocartnokiaedge: Locator;
    readonly mobiles: Locator;
     checkoutbtn: Locator;
     itemincart: Locator;
    allmobiles: Locator;
    blckbrerry: Locator;
    addtocartblckberry: Locator;


    constructor(page: Page) {
        super(page);
        this.iphonex = page.getByText("iphone X");
        this.iphoneprice = page.getByText("$24.99");
        this.addtocartiphone = page.locator(".card-footer button").nth(0);
        this.nokiaedge = page.getByText("Nokia Edge");
        this.addtocartnokiaedge = page.locator(".card-footer button").nth(2);
        this.blckbrerry = page.getByText("Blackberry")
        this.addtocartblckberry = page.locator(".card-footer button").nth(3);
        // this.addtocartblckberry=page.locator(".btn btn-info").nth(3);
        this.mobiles = page.locator(".card div h4 a");
        // this.checkoutbtn=page.locator("a.nav-link    ",{hasText: " Checkout ( 0 )             "});
        //  this.checkoutbtn = page.getByText(' Checkout ( 2 )');
       // this.checkoutbtn = page.locator(".btn btn-primary");
        this.checkoutbtn=page.locator(".btn-primary").filter({hasText: " Checkout ( 2 )            "});
       // this.checkoutbtn = page.getByRole("link", { name: "Checkout" });
        this.itemincart = page.locator(".table-hover td div h4 a");
        this.allmobiles = page.locator(".card-body a");

    }

    async click_mobile(): Promise<void> {
        const mobile: string = "Samsung Note 8";
        const mobilecount = await this.allmobiles.count();
        console.log(mobilecount);
        for (let i = 0; i < mobilecount; i++) {
            // const samsung=this.mobiles.filter({hasText:"Samsung Note 8"});
            const mobilename = await this.allmobiles.nth(i).allTextContents();
            console.log(mobilename);
            if (mobilename.includes(mobile)) {
                this.allmobiles.nth(i).click();
            }

        }
    }
    async addcart_iphone(): Promise<void> {
        await this.iphonex.textContent();
        console.log(await this.iphonex.textContent());
        await this.addtocartiphone.click();
    }

    async addcart_blckberry(): Promise<void> {
        await this.blckbrerry.innerText();
        console.log(await this.blckbrerry.innerText());
        await this.addtocartblckberry.click();
    }

    async btn_checkout(): Promise<void> {
   // await this.checkoutbtn.waitFor({ state: "visible", timeout: 6000 });
    await this.checkoutbtn.click();
}


}
