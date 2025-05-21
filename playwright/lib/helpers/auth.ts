import { request, type BrowserContext, expect } from '@playwright/test';
import { User } from '../types/types';
import { apiRoutes } from '../datafactory/constants';

export async function checkUserExistsViaAPI(testUser: User) {
  const context = await request.newContext();

  const formData = new URLSearchParams();
  formData.append('grant_type', 'password');
  formData.append('username', `${testUser.email}`);
  formData.append('password', `${testUser.password}`);

  // Create request context
  const requestContext = await request.newContext();

  // Make the POST request
  const response = await requestContext.post(apiRoutes.storefront.authenticate, {
    headers: {
      'Set-Cookie': '',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString(),
  });

  if (response.status() === 200) {
    await context.dispose();
    return true;
  } else {
    await context.dispose();
    return false;
  }
}

export async function createCookies(testUser: User) {
  // Use provided credentials or defaults
  if (!testUser.email) {
    testUser.email = 'spree@example.com';
  }
  if (!testUser.password) {
    testUser.password = 'spree123';
  }

  const formData = new URLSearchParams();
  formData.append('grant_type', 'password');
  formData.append('username', `${testUser.email}`);
  formData.append('password', `${testUser.password}`);

  // Create request context
  const context = await request.newContext();

  // Make the POST request
  const response = await context.post(apiRoutes.storefront.authenticate, {
    headers: {
      'Set-Cookie': '',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formData.toString(),
  });

  expect(response.status()).toBe(200);
  let responseJson = await response.json();
  await context.dispose();
  return responseJson;
}

export async function getCookies(context: BrowserContext, name: string) {
  const cookies = await context.cookies();
  return cookies.find((cookie) => cookie.name === name);
}

export async function checkedLoggedIn(context: BrowserContext) {
  expect(getCookies(context, '_spree_starter_session')).toBeTruthy();
}
