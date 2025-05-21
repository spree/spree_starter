import { test } from '../lib/fixtures/authenticate';

const adminUser = {
  email: 'spree@example.com',
  password: 'spree123',
};
test.describe('admin Account actions', () => {
  test.use({ userParams: adminUser });
  test('clear all addresses in admin account', async ({ authenticatedHomePage, accountPage }) => {
    await authenticatedHomePage.page.goto('/account/addresses');
    await accountPage.clearAddresses();
  });
});
