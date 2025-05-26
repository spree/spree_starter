import { test, expect } from '../lib/fixtures/instantiate';
import { successResponse } from '../lib/datafactory/mockCheckoutConfirmation';
import { generateUser } from '../lib/datafactory/testData';
import { faker } from '@faker-js/faker';

const testUser = generateUser();
test.use({ userParams: testUser });
test('checkout flow with mocked payment confirmation', async ({
  homePage,
  productsPage,
  productDetailsPage,
  checkoutPage,
}) => {
  // Mock the api call for the final step of the checkout flow
  await checkoutPage.page.route('**/products/denim-shirt', async (route, request) => {
    const response = await route.fetch();
    const body = await response.text();
    const modified = body.replace(/Denim Shirt/g, 'Strawberry Shirt!');

    if (request.method() === 'GET') {
      await route.fulfill({
        // status: 200,
        // contentType: 'text/html',
        status: response.status(),
        // body: successResponse,
        body: modified,
        headers: {
          ...response.headers(),
          'Content-Type': 'text/html',
        },
      });
    } else {
      await route.continue();
    }
  });

  await homePage.page.goto('/products');

  // Select a random product
  await productsPage.selectProduct('Denim Shirt');

  await expect(productDetailsPage.page.getByRole('heading', { name: 'Strawberry Shirt' })).toBeVisible();
  // // Select size 'M'
  // await productDetailsPage.selectSize('M');

  // // Add the product to cart
  // await productDetailsPage.addToCart();

  // // Check that cart total is greater than 0
  // const cartTotalValue = await productDetailsPage.cartSidebar.getCartTotal();
  // expect(cartTotalValue).toBeGreaterThan(0);

  // // Proceed to checkout
  // await productDetailsPage.cartSidebar.proceedToCheckout();

  // // Fill out customer email
  // await checkoutPage.fillEmail(faker.internet.email());

  // // Submit shipping address
  // await checkoutPage.fillShippingAddress();
  // await checkoutPage.page.getByRole('button', { name: 'Save and Continue' }).click();

  // // Accept the default delivery option
  // await checkoutPage.acceptDefaultShipping();

  // // Submit in payment details
  // await checkoutPage.fillPaymentDetail();
  // await checkoutPage.page.getByRole('button', { name: 'Pay' }).click();

  // // Assert that the mocked order confirmation page with 'Strawberry' client name loaded
  // await expect(homePage.page.getByText('Thanks Strawberry for your order!')).toBeVisible();
});
