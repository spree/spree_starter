import path from 'path';
import { User } from '../types/types';

// Define constants for paths
export const CART_STORAGE = path.resolve(__dirname, `../../.auth/cart-${Date.now()}.json`);
export const ADMIN_SESSION_STORAGE = path.resolve(__dirname, `../../.auth/admin-${Date.now()}.json`);
export const USER_SESSION_STORAGE = path.resolve(__dirname, `../../.auth/user-${Date.now()}.json`);

export const defaultUser: User = {
  email: 'spree@example.com',
  password: 'spree123',
};

export const apiRoutes = {
  client: {
    login: '/users/sign_in',
    signout: '/users/sign_out',
    register: '/users',
    products: '/products',
    onSale: '/t/collections/on-sale',
    newArrivals: '/t/collections/new-arrivals',
    blog: '/posts',
    wishlist: '/account/wishlist',
    addItemToCart: '/line_items',
  },
  storefront: {
    createAccount: '/api/v2/storefront/account',
    retrieveAccount: '/api/v2/storefront/account',
    createCart: '/api/v2/storefront/cart',
    retrieveCart: '/api/v2/storefront/cart',
    authenticate: '/spree_oauth/token',
    wishlist: '/api/v2/storefront/wishlists/default',
    products: '/api/v2/storefront/products',
    addToCart: '/api/v2/storefront/cart/add_item',
    validate: '/api/v2/storefront/checkout/validate_order_for_payment?skip_state=true',
    checkout: '/api/v2/storefront/checkout',
    checkoutNext: '/api/v2/storefront/checkout/next',
    checkoutAdvance: '/api/v2/storefront/checkout/advance',
    checkoutComplete: '/api/v2/storefront/checkout/complete',
    shippingRates: '/api/v2/storefront/checkout/shipping_rates',
    shippingMethod: '/api/v2/storefront/checkout/select_shipping_method',
    createPayment: '/api/v2/storefront/checkout/create_payment',
    paymentMethods: '/api/v2/storefront/checkout/payment_methods',
    retrieveOrders: '/api/v2/storefront/account/orders',
  },
  // Platform API used for accessing admin platform
  platform: {
    retrieveUser: '/', // TODO: add URL
    products: '',
    authenticate: '/spree_oauth/token',
  },
};

export const messages = {
  login: {
    success: 'Signed in successfully.',
    invalid: 'Invalid Email or password.',
  },

  signup: {
    success: 'Welcome! You have signed up successfully.',
  },
  signout: 'Signed out successfully',
};

export const cardNumbers = {
  valid: {
    visa: ['4111111111111111', '4012888888881881', '4222222222222'],
    mastercard: ['5500000000000004', '5555555555554444', '5105105105105100', '2223000010309703'],
    amex: ['378282246310005', '371449635398431', '378734493671000', '340000000000009'],
    discovery: ['6011000000000004', '6011111111111117', '6011000990139424'],
  },
  invalid: {
    visa: [
      '4000000000009995', // Insufficient funds error
      '4000000000000002', // Generic decline]
    ],
  },
};
