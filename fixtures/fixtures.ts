import {test as base, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ConfigManager } from '../config/ConfigManager';


type Fixtures={loginPage: LoginPage;}


 export const test=base.extend<Fixtures>({ loginPage: async ({page}, use)=>{
    
  // BEFORE use = Prepare everything
   const loginPage = new LoginPage(page);
   await loginPage.navigate(ConfigManager.base_url_config || "");
   await loginPage.waitForPageLoad();
   console.log("URL opened")

   // use = Give prepared object to test
   await use(loginPage);

   
   
    }
 });


export{expect}; // I am making Playwright's expect available from my custom fixture file so my test files can import both test and expect from the same place