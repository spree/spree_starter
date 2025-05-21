import { FullConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Path to your session file or any other resource to clean up
const CART_STORAGE = path.resolve(__dirname, 'playwright/.auth/cart-session.json');
const ADMIN_SESSION_STORAGE = path.resolve(__dirname, 'playwright/.auth/admin.json');
const USER_SESSION_STORAGE = path.resolve(__dirname, 'playwright/.auth/user.json');

async function globalTeardown(config: FullConfig) {
  // eslint-disable-next-line no-console
  console.log('Global Teardown: Cleaning up after all tests.');

  // Clean up session files
  if (fs.existsSync(CART_STORAGE)) {
    fs.unlinkSync(CART_STORAGE); // Delete the session file after all tests are done
  }
  if (fs.existsSync(ADMIN_SESSION_STORAGE)) {
    fs.unlinkSync(ADMIN_SESSION_STORAGE); // Delete the session file after all tests are done
  }
  if (fs.existsSync(USER_SESSION_STORAGE)) {
    fs.unlinkSync(USER_SESSION_STORAGE); // Delete the session file after all tests are done
  }

  // Perform other cleanup tasks here (e.g., delete temp files, close external services, etc.)
  // eslint-disable-next-line no-console
  console.log('Cleanup complete.');
}

export default globalTeardown;
