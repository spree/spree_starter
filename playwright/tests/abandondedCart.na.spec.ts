import { test, expect } from '../lib/fixtures/authenticate';
import { CART_STORAGE } from '../lib/datafactory/constants';
import { CartComponent } from '../lib/components/cartComponent';
import { generateUser } from '../lib/datafactory/testData';

test.use({ userParams: generateUser() });
test('abandoned cart scenario', async ({ browser, authenticatedHomePage, productsPage, productDetailsPage }) => {
  // Authentication is handled by the authenticate.ts fixture, can also be changed to pick up from .auth directory
  await authenticatedHomePage.goto();

  await authenticatedHomePage.page.goto('/products');

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
  const cartTotal1 = await productDetailsPage.cartSidebar.getCartTotal();

  // Save session storage information to file
  const browser1 = productDetailsPage.page.context();
  await browser1.storageState({ path: CART_STORAGE });

  // Close the current browser instance
  await browser1.close();

  // Reopen the browser, load the context and open new page
  const reopenedBrowser = await browser.newContext({ storageState: CART_STORAGE });
  const page2 = await reopenedBrowser.newPage();

  // Go to homepage and open the cart sidebar
  await page2.goto('/');

  await page2.getByRole('link', { name: 'Cart' }).click();

  // // Make sure it is not empty
  const cartSidebar = new CartComponent(page2.locator('#slideover-cart'));
  await expect(cartSidebar.cartListItem).toBeVisible();

  // Assert cart total amount persistence between the two browser instances
  const cartTotal2 = await cartSidebar.getCartTotal();
  expect(cartTotal1).toEqual(cartTotal2);
  expect(await cartSidebar.assertNotEmpty()).toBeTruthy();
});
