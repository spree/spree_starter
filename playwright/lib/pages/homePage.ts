import { expect, Page as PlaywrightPage } from '@playwright/test';
import { Page } from './basePage';
import { messages } from '../datafactory/constants';

export class HomePage extends Page {
  protected readonly url: string;

  constructor(page: PlaywrightPage) {
    super(page);
    this.url = '/';
  }
  async goto() {
    await this.page.goto(this.url, { waitUntil: 'networkidle' });
  }

  async returnToHomePage() {
    await this.navBar.returnHome();
  }

  async loginSuccess() {
    await expect(this.page.getByText(messages.login.success)).toBeVisible();
  }

  async signupSuccess() {
    await expect(this.page.getByText(messages.signup.success)).toBeVisible();
  }

  async checkInvalidCredentials() {
    await expect(this.page.getByText(messages.login.invalid)).toBeVisible();
  }
}
