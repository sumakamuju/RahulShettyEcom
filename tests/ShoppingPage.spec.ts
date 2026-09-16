import { test, expect } from '../fixtures/fixtures';

test("add samsung mobile to cart", async ({ page, shoppingPage }) => {

    console.log("URL:", page.url());

    console.log("Cards:", await shoppingPage.mobiles.count());

    console.log(await shoppingPage.mobiles.allTextContents());
    await shoppingPage.click_mobile();
    // await shoppingPage.btn_checkout();

    //console.log(await shoppingPage.itemincart.textContent()); 

});

test.only("add iphone and blackberry to cart", async ({ page, shoppingPage, checkoutPage }) => {
    await shoppingPage.addcart_iphone();
    await shoppingPage.addcart_blckberry();
  
    await shoppingPage.btn_checkout();

    // await checkoutPage.item_in_cart();
    // await checkoutPage.remove_from_cart();







})