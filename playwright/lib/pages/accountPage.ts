import { expect } from '@playwright/test';
import { Page } from './basePage';
import { Locator } from '@playwright/test';

export class AccountPage extends Page {
  public readonly deleteIcon: Locator = this.page.locator('[data-test-id="delete_address"]');
  public readonly confirmButton: Locator = this.page.getByRole('button', { name: 'Delete' });
  public readonly addressDeletionConfirmation: Locator = this.page.getByText('Address has been successfully removed.');
  public readonly logoutButton: Locator = this.page.getByRole('button', { name: 'Logout' });

  async goto() {
    await this.page.goto('/account');
  }

  async clearAddresses() {
    await this.page.goto('/account/addresses');
    const addressCount = await this.page.locator('[data-test-id="delete_address"]').count();
    for (let i = 0; i < addressCount; i++) {
      await this.deleteIcon.first().click();
      await this.confirmButton.click();
      await expect(this.addressDeletionConfirmation).toBeVisible();
    }
  }

  async returnToHomePage() {
    await this.navBar.returnHome();
  }

  async addressCount() {
    const addressCount = await this.page.locator('[data-test-id="delete_address"]').count();
    return addressCount;
  }

  async logout() {
    await this.page.goto('/account');
    await this.logoutButton.click();
  }
}
