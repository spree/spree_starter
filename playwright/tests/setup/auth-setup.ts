import { test as setup } from '../../lib/fixtures/authenticate';
import { generateUser } from '../../lib/datafactory/testData';

const adminFile = '.auth/admin.json';
const testUserFile = '.auth/user.json';

setup.describe('admin authentication', () => {
  setup.use({
    testUser: {
      email: 'spree@example.com',
      password: 'spree123',
    },
  });
  setup('authenticate as admin, persist session storage', async ({ homePage, testUser }) => {
    // await loginPage.goto();
    // await loginPage.loginForm.doLogin(testUser);
    await homePage.goto();
    await homePage.navBar.navToAccount();
    await homePage.loginForm.doLogin(testUser);
    await homePage.loginSuccess();
    await homePage.page.context().storageState({ path: adminFile });
  });
});
setup.describe('non-admin user authentication', () => {
  setup('authenticate as new non-admin user, persist session storage', async ({ homePage, loginPage }) => {
    const testUser = generateUser();
    await homePage.goto();
    await homePage.navBar.navToAccount();
    await homePage.loginForm.signupLink.click();
    await homePage.signupForm.signup(testUser);
    await loginPage.signupSuccess();
    await loginPage.page.context().storageState({ path: testUserFile });
  });
});
