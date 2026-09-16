import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ConfigManager } from '../config/ConfigManager';
import { ShoppingPage } from '../pages/ShoppingPage';
import { CheckoutPage } from '../pages/CheckoutPage';


type Fixtures = {
   loginPage: LoginPage;
   shoppingPage: ShoppingPage;
   checkoutPage: CheckoutPage;
}

export const test = base.extend<Fixtures> ({

   loginPage: async ({ page }, use) => {

      // BEFORE use = Prepare everything
      const loginPage = new LoginPage(page);
      await loginPage.navigate(ConfigManager.base_url_config || "");
      await loginPage.waitForPageLoad();
      console.log("URL opened")

      // use = Give prepared object to test
      await use(loginPage);

   },

   shoppingPage: async ({ page }, use) => {
      const shoppingPage = new ShoppingPage(page);
      await shoppingPage.navigate(ConfigManager.base_url2_config || "");
      await shoppingPage.waitForPageLoad();
      await use(shoppingPage);
   },

   checkoutPage: async ({ page }, use) => {
      const checkoutPage = new CheckoutPage(page);
      await checkoutPage.waitForPageLoad();
      await use(checkoutPage);
   }

});


export { expect }; // I am making Playwright's expect available from my custom fixture file so my test files can import both test and expect from the same place