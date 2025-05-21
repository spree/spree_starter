import { request } from '@playwright/test';
import { JSDOM } from 'jsdom';
import { User } from '../types/types';

const baseURL = process.env.BASE_URL || 'http://localhost:3000';

export async function getAuthenticityToken(sessionStoragePath: string, testUser: User) {
  const client = await request.newContext();
  const loginPageResponse = await client.get(baseURL + '/users/sign_in');
  const loginPageHTML = await loginPageResponse.text();
  const dom = new JSDOM(loginPageHTML);
  const document = dom.window.document;
  // Find the form by ID
  const form = document.querySelector('form#new_user');
  if (!form) {
    throw new Error('Login form not found');
  }
  // Find the hidden input with name="authenticity_token"
  const tokenInput = form.querySelector('input[name="authenticity_token"]');
  // console.log('tokenInput', tokenInput);
  const csrfToken = tokenInput ? tokenInput.getAttribute('value') : null;

  if (!csrfToken) {
    throw new Error('CSRF token not found in login form');
  }

  const payload = new URLSearchParams({
    authenticity_token: csrfToken,
    'spree_user[email]': testUser.email,
    'spree_user[password]': testUser.password,
    'user[remember_me]': '0',
    commit: 'Login',
  });
  // Submit login form with the CSRF token
  await client.post('/users/sign_in', {
    data: payload.toString(),
  });

  // Save session storage it to a file
  await client.storageState({ path: sessionStoragePath });
}
