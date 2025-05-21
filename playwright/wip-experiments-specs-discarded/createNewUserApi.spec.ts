import { test, expect, request } from '@playwright/test';

test('should create a new user via API', async () => {
  const context = await request.newContext();

  const response = await context.post('https://demo.spreecommerce.org/api/v2/storefront/account', {
    headers: {
      'Content-Type': 'application/vnd.api+json',
    },
    data: {
      user: {
        email: 'john.snow+three@example.org',
        password: 'spree123',
        password_confirmation: 'spree123',
      },
    },
  });

  expect(response.status()).toBe(200); // Created
  const body = await response.json();

  expect(body.data).toBeDefined();
  expect(body.data.attributes.email).toBe('john.snow+three@example.org');
});
