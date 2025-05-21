import { test, expect } from '../lib/fixtures/authenticate';
import { generateUser } from '../lib/datafactory/testData';

test.describe('Checkout flow:', () => {
  const testUser = generateUser();
  test.use({ userParams: testUser });
  // Authentication is done via the authenticate.ts fixture
  test('entire checkout flow with API', async ({ authenticatedUserClient }) => {
    // Place an order so that the customer has multiple order history
    // await authenticatedUserClient.placeOrder(); // uncomment if you want the user to have more than 1 order in history

    // Create a new cart parse it and set the cart token
    await authenticatedUserClient.createCart();

    // Add a random product in a random quality of 1-10 to cart
    await authenticatedUserClient.addProductToCart();

    // Add another random product in a random quality of 1-10 to cart
    await authenticatedUserClient.addProductToCart();

    // Add customer details: billing and shipping address
    await authenticatedUserClient.addAddresses();

    // Select shipping method and rate details
    await authenticatedUserClient.addShippingMethod();

    // Add payment details
    await authenticatedUserClient.addPaymentDetails(true); // Use valid card details

    // Proceed with checkout
    await authenticatedUserClient.completeCheckout();

    // Retrieve all customer's orders
    const response = await authenticatedUserClient.retrieveAllOrders();

    // Assert that all customer's orders contain the latest order
    let allOrders: number[] = [];
    for (let i = 0; i < response.data.length; i++) {
      allOrders.push(response.data[i].id);
    }
    expect(allOrders).toContain(authenticatedUserClient.latestOrderId);
  });
});
