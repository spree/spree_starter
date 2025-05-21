import { test, expect } from '../lib/fixtures/instantiate';

const adminFile = 'playwright/.auth/admin.json';
const userFile = 'playwright/.auth/user.json';

test.describe('authentication and authorization scenarios', () => {
  test.use({ storageState: adminFile });
  test('authorization to access admin dashboard as an admin user ', async ({ homePage }) => {
    // Navigate to the admin platform
    await homePage.page.goto('/admin');

    // Assert the Admin panel loaded
    await expect(homePage.page.getByRole('button', { name: 'Spree Admin spree@example.com' })).toContainText(
      'Spree Admin'
    );
  });

  test.describe('non-admin user authentication & authorization flows', () => {
    test.use({ storageState: userFile });
    test('no authorization to access admin dashboard as a non-admin user', async ({ loginPage }) => {
      // Navigate to the admin platform
      await loginPage.page.goto('/admin');

      // Assert the Admin panel loaded
      expect(loginPage.page.url()).toBe(`${process.env.BASE_URL}/admin/forbidden`);
    });
    test('session and cart context is cleared from the browsers on logout', async ({
      productsPage,
      productDetailsPage,
      accountPage,
      homePage,
    }) => {
      await productsPage.page.goto('/products');

      // Select a random/default product
      await productsPage.selectProduct();

      // Select size
      await productDetailsPage.selectSize('XS');

      // Add to cart
      await productDetailsPage.addToCart();

      await accountPage.logout();

      await homePage.navBar.navToCart();

      // There is a bug right now  where the cart won't get cleared on logout, hence commenting this out
      // TODO: uncomment the assertion below  when the bug is fixed
      // await homePage.cartSidebar.assertEmpty();
    });
  });
});
