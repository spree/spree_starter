import { expect, type Locator } from '@playwright/test';
import { PageObject } from './basePageObject';

export class CartComponent extends PageObject {
  public readonly header: Locator = this.host.getByText('Cart');
  // Pass ('#slideover-cart') as the cart host when instantiate
  public readonly cartListItem: Locator = this.host.locator('li.cart-line-item');

  async assertEmpty() {
    // Check that the cart has been created and is not empty
    await expect(this.host).toContainText('Your cart is empty.');
    await expect(this.host.getByRole('link')).toContainText('Continue shopping');
  }

  async assertNotEmpty() {
    // Check that the cart has been created and is not empty
    await expect(this.cartListItem).toBeVisible();
    const itemCount = await this.cartListItem.count();

    // Check that there is not 'Your cart is empty.' label is shown
    await expect(this.host).not.toContainText('Your cart is empty.');

    return itemCount > 0;
  }

  async removeItem() {
    // Removes first (top) item from the cart
    await this.host.getByRole('listitem').locator('button.remove-line-item-button').click();
  }

  async increaseItemCount(productName: string) {
    // Increases the number of items of a selected product
    // If there multiple products with the same name, it selects the first one
    await this.host
      .getByRole('listitem')
      .filter({ hasText: productName })
      .locator('button.quantity-increase-button')
      .first()
      .click();
  }
  async getCartTotal() {
    const cartTotal = await this.host.locator('span.shopping-cart-total-amount').textContent();
    const cartTotalAmount = parseFloat(cartTotal?.replace('$', '').trim() || '0');
    return cartTotalAmount;
  }
  async decreaseItemCount(productName: string) {
    // Decreases the number of items of a selected product
    // If there multiple products with the same name, it selects the first one
    if (
      await this.host
        .getByRole('listitem')
        .filter({ hasText: productName })
        .locator('button.quantity-decrease-button')
        .first()
        .isDisabled()
    ) {
      // eslint-disable-next-line no-console
      console.log('Item count is equal 1, not possible to decrease');
    } else {
      await this.host
        .getByRole('listitem')
        .filter({ hasText: productName })
        .locator('button.quantity-decrease-button')
        .first()
        .click();
    }
  }
  // TODO: add method returning total amount in the cart
  async proceedToCheckout() {
    await this.host.getByRole('link', { name: 'Checkout' }).click();
  }
}
