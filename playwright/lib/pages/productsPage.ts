import { Page } from './basePage';
import { mathRandom } from '../helpers/utils';
import { Page as PlaywrightPage, expect } from '@playwright/test';

export class ProductsPage extends Page {
  protected readonly url: string;
  constructor(page: PlaywrightPage) {
    super(page);
    this.url = '/products';
  }
  async goto() {
    await this.page.goto(this.url);
  }

  async selectProduct(productName?: string | null) {
    // Select a random product on the page
    let response;
    if (productName) {
      await expect(this.page.getByText(productName)).toBeEnabled();
      response = await this.page.getByText(productName).click();
    } else {
      const randomNumber: number = mathRandom(1, 20);
      response = await this.page.locator(`#product-${randomNumber}`).click();
    }
    await this.page.waitForLoadState('networkidle');
    return response;
  }

  async method2() {
    /*...*/
  }
}
