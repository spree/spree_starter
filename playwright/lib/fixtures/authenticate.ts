import { test as base, expect } from './instantiate';
import { HomePage } from '../pages/homePage';
import { User } from '../types/types';
import { UserClient } from '../apiClient/userClient';
import { USER_SESSION_STORAGE } from '../datafactory/constants';

type AuthenticatedFixtures = {
  testUser: User;
  userParams?: Partial<User>; // Optional override
  authenticatedHomePage: HomePage;
  authenticatedUserClient: UserClient;
  userClient: UserClient;
};

export const test = base.extend<AuthenticatedFixtures>({
  userParams: [undefined, { scope: 'test' }],

  testUser: async ({ userParams, userClient }, use) => {
    const defaultUser = { email: 'default@example.com', password: 'spree123' };
    const mergedUser = { ...defaultUser, ...userParams };
    const exists = await userClient.checkUserExists(mergedUser);
    // Check if the user exists and create the user if necessary
    if (!exists) {
      console.log('User does not exist, creating new user...');
      await userClient.createAccount(mergedUser);
    } else {
      console.log('User already exists:', mergedUser);
    }
    console.log('mergedUser:', mergedUser);

    // Pass the mergedUser to the next step
    await use(mergedUser);
  },
  authenticatedUserClient: async ({ userClient, testUser }, use) => {
    const authResponse = await userClient.authenticate(testUser);
    const authData = await authResponse.json();
    expect(authResponse.ok()).toBeTruthy();
    userClient.accessToken = authData.access_token;
    await use(userClient);
  },
  authenticatedHomePage: async ({ loginPage, homePage, testUser, context }, use) => {
    await loginPage.goto();
    await loginPage.loginForm.doLogin(testUser);
    // await homePage.goto();
    // await homePage.navBar.navToAccount();
    // await homePage.loginForm.doLogin(testUser);

    // Confirm login is successful
    await homePage.loginSuccess();
    await context.storageState({ path: USER_SESSION_STORAGE });

    // Pass the authenticated page object back to the test
    await use(homePage);
  },
});

export { expect } from '@playwright/test';
