import { Page } from './basePage';

export class ProductDetailsPage extends Page {
  async goto(url: string) {
    await this.goto(url);
  }

  async increaseQuantity() {
    await this.page.locator('button.increase-quantity').click();
  }

  async selectSize(size: string) {
    await this.page.getByRole('button', { name: 'Please select' }).click();
    // if (!this.page.locator('label').filter({ hasText: size })) {
    //   await this.page.getByRole('button', { name: 'Please select' }).click();
    // }
    await this.page.locator('label').filter({ hasText: size }).click();
    // if (this.page.locator('label').filter({ hasText: size })) {
    //   await this.page.locator('label').filter({ hasText: size }).click();
    // }
  }

  async addToCart() {
    await this.page.getByRole('button', { name: 'Add To Cart' }).click();
  }
}
