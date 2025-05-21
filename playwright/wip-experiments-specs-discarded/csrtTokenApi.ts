// This is an unsuccessful attempt to use CSRF token for api
import { apiRoutes } from '../lib/datafactory/constants';
import { test } from '../lib/fixtures/instantiate';
import { JSDOM } from 'jsdom';
import * as fs from 'fs';
import { generateUser } from '../lib/datafactory/testData';

const testUser = generateUser();
test('a full checkout flow via API', async ({ userClient }) => {
  // Step 1: Get the login page to extract CSRF token
  const loginPageResponse = await userClient.get('/users/sign_in');
  const loginPageHTML = await loginPageResponse.text();
  fs.writeFileSync('playwright/login_page.html', await loginPageResponse.text());
  const dom = new JSDOM(loginPageHTML);
  const document = dom.window.document;

  // Find the form by ID
  const form = document.querySelector('form#new_user');
  if (!form) {
    throw new Error('Login form not found');
  }

  // Find the hidden input with name="authenticity_token"
  const tokenInput = form.querySelector('input[name="authenticity_token"]');
  const csrfToken = tokenInput ? tokenInput.getAttribute('value') : null;

  if (!csrfToken) {
    throw new Error('CSRF token not found in login form');
  }

  // Submit login form with the CSRF token
  await userClient.post('/users/sign_in', {
    form: {
      authenticity_token: csrfToken,
      'spree_user[email]': testUser.email,
      'spree_user[password]': testUser.password,
      'user[remember_me]': 0,
      commit: 'Login',
    },
  });
  const getShirtToken = await userClient.get('/products/regular-shirt?options=1%3Ablue%2C2%3Am');
  const shirtHTML = await getShirtToken.text();

  const shirtDOM = new JSDOM(shirtHTML);
  const shirtDocument = shirtDOM.window.document;

  // Add item to cart
  // Find the hidden input with name="authenticity_token"
  const lineItemForm = shirtDocument.querySelector('form[action="/line_items"]');
  const lineItemInput = lineItemForm?.querySelector('input[name="authenticity_token"]');
  const lineItemToken = lineItemInput ? lineItemInput.getAttribute('value') : null;

  await userClient.post(apiRoutes.client.addItemToCart, {
    form: {
      authenticity_token: lineItemToken,
      Color: 'blue',
      Size: 'm',
      quantity: 1,
      variant_id: 169,
    },
  });
});
