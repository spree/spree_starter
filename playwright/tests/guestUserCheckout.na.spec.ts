import { test, expect } from '../lib/fixtures/instantiate';
import { faker } from '@faker-js/faker';

test('guest checkout flow', async ({ homePage, productsPage, productDetailsPage, checkoutPage }) => {
  // Go to /products catalogue
  await homePage.page.goto('/products');

  // Selects a random product by random product on the Shop All page
  await productsPage.selectProduct();

  // Select size
  await productDetailsPage.selectSize('M');

  // Add to cart
  await productDetailsPage.addToCart();

  // Assert the cart sidebar is open and the cart has the selected item
  await expect(productsPage.cartSidebar.cartListItem).toBeVisible();

  // Assert the cart is not empty
  await productDetailsPage.cartSidebar.assertNotEmpty();

  // Note the cart total
  const cartTotal = await productDetailsPage.cartSidebar.getCartTotal();

  // Proceed to checkout
  await productDetailsPage.cartSidebar.proceedToCheckout();

  // Fill in email
  await checkoutPage.fillEmail(faker.internet.email());

  // Fill in address
  await checkoutPage.fillShippingAddress();
  await checkoutPage.saveAndContinue();

  await checkoutPage.acceptDefaultShipping();

  await checkoutPage.fillPaymentDetail();
  await checkoutPage.page.getByRole('button', { name: 'Pay' }).click();

  // This is a necessary wait because the previous /payment card input interferes with the one in /confirm step
  await checkoutPage.page.waitForURL('**/checkout/**/confirm');

  await checkoutPage.fillPaymentDetail();
  await checkoutPage.page.getByRole('button', { name: 'Pay' }).click();

  // This is a necessary wait since the confirmation page takes longer than out timeout.
  // Ideally this needs to be mocked which can be seen in the /mockedPaymentCheckout.na.spec.ts
  await checkoutPage.page.waitForURL('**/checkout/**/complete');

  // Assert payment is successful, confirmation message is shown
  const orderConfirmation = checkoutPage.page.getByRole('heading', { name: /Thanks .* for your order!/ });
  await expect(orderConfirmation).toBeVisible();

  // Assert that cart items total is the same as was in the cart before checkout
  await expect(checkoutPage.page.locator('#checkout_summary')).toContainText(`$${cartTotal}`);
});
