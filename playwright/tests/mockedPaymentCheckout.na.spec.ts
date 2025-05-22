import { test, expect } from '../lib/fixtures/authenticate';
import { faker } from '@faker-js/faker';
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

  await checkoutPage.page.route('*/**/checkout/**/update/payment', async (route, request) => {
    if (request.method() === 'POST') {
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

  await checkoutPage.page.waitForURL('*/**/checkout/**/update/payment');

  // Assert that the mocked order confirmation page with 'Strawberry' client name loaded
  await expect(checkoutPage.page.getByText('Thanks Strawberry for your order!')).toBeVisible();
});
