import { type Locator } from '@playwright/test';
import { PageObject } from './basePageObject';
import { User } from '../types/types';

export class LoginForm extends PageObject {
  public readonly header: Locator = this.host.getByRole('heading');
  protected readonly emailInput: Locator = this.host.getByRole('textbox', { name: 'Email' });
  protected readonly passwordInput: Locator = this.host.getByRole('textbox', { name: 'Password' });
  protected readonly loginButton: Locator = this.host.getByRole('button', { name: 'Login' });
  public readonly signupLink: Locator = this.host.getByRole('link', { name: 'Sign Up' });
  public readonly forgotPasswordLink: Locator = this.host.getByRole('link', { name: 'Forgot Password' });
  public readonly rememberCheckbox: Locator = this.host.getByRole('checkbox', { name: 'Remember me' });

  async fillEmail(testUser: User) {
    await this.emailInput.fill(testUser.email);
  }

  async fillPassword(testUser: User) {
    await this.passwordInput.fill(testUser.password);
  }

  async doLogin(testUser: User) {
    await this.emailInput.fill(testUser.email);
    await this.passwordInput.fill(testUser.password);
    await this.loginButton.click();
  }
  // TODO: add goto password reset and switch between login/signup
  // TODO: add tests for negative scenarios, error handling etc.
}
