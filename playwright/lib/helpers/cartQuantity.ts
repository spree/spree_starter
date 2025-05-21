// utils/cartUtils.ts
import { Page } from '@playwright/test';

/**
 * Gets the total quantity of all items in the cart
 * @param page The Playwright page object
 * @param itemSelector CSS selector for cart items
 * @param quantitySelector CSS selector for the quantity element within each item
 * @returns The total quantity of all items in cart
 */

export async function getTotalCartQuantity(
  page: Page,
  quantitySelector = page.getByRole('listitem').getByRole('spinbutton', { name: 'Quantity' })
): Promise<number> {
  const quantityElements = await page.locator(`${quantitySelector}`).all();
  let totalQuantity = 0;
  for (const element of quantityElements) {
    const quantityText = await element.textContent();
    if (quantityText) {
      const quantity = parseInt(quantityText.trim(), 10);
      if (!isNaN(quantity)) {
        totalQuantity += quantity;
      }
    }
  }
  return totalQuantity;
}
