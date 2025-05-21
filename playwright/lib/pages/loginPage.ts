import { expect } from '@playwright/test';
import { Page } from './basePage';
import { Page as PlaywrightPage } from '@playwright/test';
import { messages } from '../datafactory/constants';

export class LoginPage extends Page {
  protected readonly url: string;
  constructor(page: PlaywrightPage) {
    super(page);
    this.url = '/';
  }

  async goto() {
    await this.page.goto('/users/sign_in');
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
