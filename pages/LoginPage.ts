import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { ConfigManager } from '../config/ConfigManager';

export class LoginPage extends BasePage {
    readonly username: Locator;
    readonly password: Locator;
    readonly signbtn: Locator;
    readonly termscheckbox: Locator;
    readonly errmsg: Locator;

    constructor(page: Page) {
        super(page);
        this.username = page.locator("#username");
        this.password = page.locator("#password");
        this.signbtn = page.locator("#signInBtn");
        //this.termscheckbox = page.locator("#terms");
        this.termscheckbox = page.getByRole('checkbox', { name: "terms" });
        this.errmsg = page.locator(".alert.alert-danger");
    }
    async user_name(value: string): Promise<void> {
        await this.username.fill(value)
    }
    async pass_word(value: string): Promise<void> {
        await this.password.fill(value)
    }
    async terms_checkbox(): Promise<void> {
        await this.termscheckbox.waitFor({ state: 'visible' });
        // console.log("Checkbox count:", await this.termscheckbox.count());
        // console.log("Checkbox visible:", await this.termscheckbox.isVisible());
        // console.log("Checkbox enabled:", await this.termscheckbox.isEnabled());
        // console.log("Checkbox checked:", await this.termscheckbox.isChecked());

        await this.termscheckbox.check();
    }
    async sign_in_btn(): Promise<void> {
        await this.signbtn.click();
    }

    async login(): Promise<void> {
        await this.username.fill(ConfigManager.user_name_config || "");
        await this.password.fill(ConfigManager.pass_word_config || "");
        await this.terms_checkbox();
        await this.sign_in_btn();
    }

}