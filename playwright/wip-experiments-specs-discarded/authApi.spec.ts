import { test } from '../lib/fixtures/authenticate';
import { createCookies } from '../lib/helpers/auth';
import { adminAccessTokenFile, adminUser, generateUser } from '../lib/datafactory/testData';

test.describe('authenticate as admin and save the session token', () => {
  test.use({ testUser: adminUser });
  test('authenticate as admin', async ({ page, context, testUser }) => {
    const cookies = await createCookies(testUser);
    await page.context().addCookies([
      {
        name: 'access_token',
        value: cookies.access_token,
        domain: process.env.COOKIE_DOMAIN_VALUE,
        path: '/',
      },
    ]);
    await context.storageState({ path: adminAccessTokenFile });
  });
});

test.describe('authenticate as a new non-admin user', () => {
  test.use({ testUser: generateUser() });
  test('create a new non-admin user', async ({ page, context, testUser }) => {
    const userAccessTokenFile = `playwright/.auth/${testUser.email}${testUser.password}.json`;
    const cookies = await createCookies(testUser);
    await page.context().addCookies([
      {
        name: 'access_token',
        value: cookies.access_token,
        domain: process.env.COOKIE_DOMAIN_VALUE,
        path: '/',
      },
    ]);
    await context.storageState({ path: userAccessTokenFile });
  });
});
