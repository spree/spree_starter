import { test, expect } from '../lib/fixtures/authenticate';
import { successResponse } from '../lib/datafactory/mockCheckoutConfirmation';
import { generateUser } from '../lib/datafactory/testData';

const testUser = generateUser();
test.use({ userParams: testUser });
test('checkout flow with mocked payment confirmation', async ({
  productsPage,
  productDetailsPage,
  checkoutPage,
  authenticatedHomePage,
}) => {
  // Mock the api call for the final step of the checkout flow

  await checkoutPage.page.route('*/**/checkout/**/complete', async (route, request) => {
    if (request.method() === 'GET') {
      await route.fulfill({
        status: 200,
        contentType: 'text/html; charset=utf-8',
        body: successResponse,
      });
    } else {
      await route.continue();
    }
  });

  await authenticatedHomePage.page.goto('/products');

  // Select a random product
  await productsPage.selectProduct();

  // Select size 'M'
  await productDetailsPage.selectSize('M');

  // Add the product to cart
  await productDetailsPage.addToCart();

  // Check that cart total is greater than 0
  const cartTotalValue = await productDetailsPage.cartSidebar.getCartTotal();
  expect(cartTotalValue).toBeGreaterThan(0);

  // Proceed to checkout
  await productDetailsPage.cartSidebar.proceedToCheckout();

  // Fill out customer email
  // await checkoutPage.fillEmail(faker.internet.email());

  // Submit shipping address
  await checkoutPage.fillShippingAddress();
  await checkoutPage.page.getByRole('button', { name: 'Save and Continue' }).click();

  // Accept the default delivery option
  await checkoutPage.acceptDefaultShipping();

  // Submit in payment details
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
  // await expect(checkoutPage.page.locator('#checkout_summary')).toContainText(`$${cartTotal}`);

  // // Submit in payment details
  // await checkoutPage.fillPaymentDetail();
  // await checkoutPage.page.getByRole('button', { name: 'Pay' }).click();

  // // Wait for navigation to start
  // await checkoutPage.page.waitForURL('*/**/checkout/**/update/confirm', { waitUntil: 'networkidle' });

  // await checkoutPage.page.waitForURL('*/**/checkout/**/update/confirm');

  // Assert that the mocked order confirmation page with 'Strawberry' client name loaded
  // await expect(checkoutPage.page.getByText('Thanks Strawberry for your order!')).toBeVisible();
});
