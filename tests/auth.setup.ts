import{test as setup, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ConfigManager } from '../config/ConfigManager';
import path from'path';
import fs from 'fs';


// const authDir = path.join(process.cwd(), 'auth', 'storageState');
// const authFile = path.join(authDir, 'user.json');

const authFile = path.join(process.cwd(), 'auth', 'storageState', 'user.json');
 
// fs.mkdirSync(authDir, { recursive: true });


setup('authorized user login', async({page})=>{
    const loginPage= new LoginPage(page);  
    await loginPage.navigate(ConfigManager.base_url_config || "");
    await loginPage.login();
    //console.log("current url:", page.url())
   // await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
    
await page.context().storageState({path: authFile}); 
    // console.log('Auth file:', authFile);
    // console.log('File exists:', fs.existsSync(authFile));
})