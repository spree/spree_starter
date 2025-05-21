import { type Locator } from '@playwright/test';
import { PageObject } from './basePageObject';
import { User } from '../types/types';

export class SignupForm extends PageObject {
  public readonly header: Locator = this.host.getByRole('heading');
  protected readonly emailInput: Locator = this.host.getByRole('textbox', { name: 'Email', exact: true });
  protected readonly passwordInput: Locator = this.host.getByRole('textbox', { name: 'Password', exact: true });
  protected readonly signupLink: Locator = this.host.getByRole('link', { name: 'Sign Up' });
  protected readonly signupButton: Locator = this.host.getByRole('button', { name: 'Sign Up' });
  protected readonly forgotPasswordLink: Locator = this.host.getByRole('link', { name: 'Forgot Password' });
  protected readonly rememberCheckbox: Locator = this.host.getByRole('checkbox', { name: 'Remember me' });
  public readonly passwordConfirmation: Locator = this.host.getByRole('textbox', { name: 'Password Confirmation' });

  async fillEmail(testUser: User) {
    await this.emailInput.fill(testUser.email);
  }

  async fillPassword(testUser: User) {
    await this.passwordInput.fill(testUser.password);
  }

  async fillConfirmation(testUser: User) {
    await this.passwordConfirmation.fill(testUser.password);
  }

  async signup(testUser: User) {
    // await this.signupLink.click();
    await this.emailInput.fill(testUser.email);
    await this.passwordInput.fill(testUser.password);
    await this.passwordConfirmation.fill(testUser.password);
    await this.signupButton.click();
  }

  // TODO: add goto password reset and switch between login/signup
  // TODO: add tests for negative scenarios, error handling etc.
}
