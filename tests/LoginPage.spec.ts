import { test, expect } from '../fixtures/fixtures';
import { negativeloginData } from '../test-data/login-data'; 


test.skip('valid user should login successfully', async ({ page, loginPage }) => {

        await loginPage.login();
        await expect(page).toHaveURL("https://rahulshettyacademy.com/angularpractice/shop");
        console.log("Login successsful with valid credentials")
}); 

test.describe('Invalid Login Tests', () => {
    for (const data of negativeloginData) {
    
        test.skip(`Login -${data.testCase}`, async({ loginPage})=>{
        await loginPage.user_name(data.username);
        await loginPage.pass_word(data.password);
        await loginPage.terms_checkbox();
        await loginPage.sign_in_btn();
        console.log(`Login with ${data.testCase}`);
        await expect(loginPage.errmsg).toHaveText(data.expectedError);
        console.log("Login unsuccessful");
        });

        
    }
    });








