import { BaseApiClient } from './baseApiClient';
import { User, Cart } from '../types/types';
import { apiRoutes, cardNumbers } from '../datafactory/constants';
import { mathRandom } from '../helpers/utils';
import { customerDetails } from '../datafactory/testData';
import { expect } from '@playwright/test';

export class UserClient extends BaseApiClient {
  private _cartTokenValue: string = '';
  private _latestOrderId: number = 0;
  private _existingCartObject = {};

  set cartToken(cartTokenValue: string) {
    this._cartTokenValue = cartTokenValue;
  }
  get cartToken() {
    return this._cartTokenValue;
  }
  set latestOrderId(orderId: number) {
    this._latestOrderId = orderId;
  }
  get latestOrderId() {
    return this._latestOrderId;
  }
  set existingCartObject(existingCartObject: Cart) {
    this._existingCartObject = existingCartObject;
  }
  get existingCartObject() {
    return this._existingCartObject as Cart;
  }

  async createAccount(testUser: User) {
    const response = await this.post('/api/v2/storefront/account', {
      data: {
        user: {
          email: testUser.email,
          password: testUser.password,
          password_confirmation: testUser.password,
        },
      },
      headers: {
        'Content-Type': 'application/vnd.api+json',
      },
    });
    return response;
  }

  async authenticate(testUser: User) {
    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('username', testUser.email);
    formData.append('password', testUser.password);

    // Make the POST request to /authenticate endpoint
    const response = await this.post(apiRoutes.storefront.authenticate, {
      data: formData.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response;
  }

  async checkUserExists(testUser: User) {
    const formData = new URLSearchParams();
    formData.append('grant_type', 'password');
    formData.append('username', testUser.email);
    formData.append('password', testUser.password);
    const response = await this.post(apiRoutes.storefront.authenticate, {
      data: formData.toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.status() === 200;
  }

  async getAccessToken(testUser: User) {
    const response = await this.authenticate(testUser);
    const json = await response.json();
    return json.access_token;
  }

  async createCart() {
    const response = await this.post(apiRoutes.storefront.createCart);

    // Retrieve that current cart state
    const responseJson = await response.json();
    this.cartToken = responseJson.data.attributes.token;
    this.latestOrderId = responseJson.data.id;
    return responseJson;
  }

  async retrieveCart() {
    const response = await this.get(apiRoutes.storefront.retrieveCart);
    const responseJson = await response.json();
    this._existingCartObject = responseJson;
    return responseJson;
  }

  async addProductToCart() {
    // Retrieve the pre-existing cart item total
    const existingCart = await this.get(apiRoutes.storefront.retrieveCart, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
    });
    const existingCartJson = await existingCart.json();
    const existingCartTotal = existingCartJson.data.attributes.item_total;

    // Select a random product and retrieve product defaultVariant_id and itemPrice
    const getProduct = await this.get(apiRoutes.storefront.products + '/' + mathRandom(1, 25));
    const getProductJson = await getProduct.json();
    const itemPrice = getProductJson.data.attributes.price;
    const defaultVariant = getProductJson.data.relationships.default_variant.data.id;

    // Build out product object
    const product = {
      variant_id: defaultVariant,
      quantity: mathRandom(1, 10),
    };

    // Add the item to cart in a random quantity from 1 to 10
    const newCart = await this.post(apiRoutes.storefront.addToCart, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
      data: product,
    });

    // Retrieve the new cart item total
    const newCartJson = await newCart.json();
    const newCartTotal = newCartJson.data.attributes.item_total;
    return newCartTotal === existingCartTotal + itemPrice * itemPrice;
  }

  async addAddresses() {
    await this.patch(apiRoutes.storefront.checkout, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
      data: customerDetails,
    });

    // Retrieve that current cart state
    const nextResponse = await this.patch(apiRoutes.storefront.checkoutNext, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
    });
    const nextResponseJson = await nextResponse.json();
    return nextResponseJson.data.attributes.state === 'delivery';
  }

  async checkoutNext() {
    // Retrieve that current cart state
    await this.patch(apiRoutes.storefront.checkoutNext, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
    });
  }

  async addShippingMethod() {
    // Retrieve information about the available shipping rates
    const shippingRates = await this.get(apiRoutes.storefront.shippingRates);
    const shippingRatesJson = await shippingRates.json();
    const shippingId = shippingRatesJson.data[0].id;
    const shippingRateId = shippingRatesJson.included[0].id;

    // Extract information about the available shipping methods
    const shippingMethod = shippingRatesJson.included[0].attributes.shipping_method_id;
    const shippingData = { shipping_method_id: shippingMethod };

    // Build out a shippingDetails object from the information retrieved
    const shippingDetails = {
      order: {
        shipments_attributes: [
          {
            id: shippingId,
            selected_shipping_rate_id: shippingRateId,
          },
        ],
      },
    };

    // Select shipping rates
    await this.patch(apiRoutes.storefront.checkout, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
      data: shippingDetails,
    });

    // Select shipping method
    await this.patch(apiRoutes.storefront.shippingMethod, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
      data: shippingData,
    });

    // Retrieve that current cart state
    const nextResponse = await this.patch(apiRoutes.storefront.checkoutNext, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
    });
    const nextResponseJson = await nextResponse.json();
    return nextResponseJson.data.attributes.state === 'payment';
  }

  async addPaymentDetails(isValid: boolean) {
    // Build out a customer payment details object with valid card numbers
    const validPaymentDetails = {
      order: {
        payments_attributes: [
          {
            payment_method_id: 2,
            source_attributes: {
              number: isValid ? cardNumbers.valid.visa[mathRandom(0, 2)] : cardNumbers.invalid.visa[mathRandom(0, 1)],
              month: 10,
              year: 2031,
              cc_type: 'visa',
              verification_value: '123',
              name: 'Bogus Gateway',
            },
          },
        ],
      },
    };
    await this.patch(apiRoutes.storefront.checkout, {
      data: validPaymentDetails,
      headers: { 'X-Spree-Order-Token': this.cartToken },
    });
  }
  async completeCheckout() {
    const completeCheckout = await this.patch(apiRoutes.storefront.checkoutComplete, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
    });

    // Retrieve that current cart state
    const completeCheckoutJson = await completeCheckout.json();

    return completeCheckoutJson;
  }
  async retrieveAllOrders() {
    const response = await this.get(apiRoutes.storefront.retrieveOrders, {
      headers: { 'X-Spree-Order-Token': this.cartToken },
    });
    const responseJson = await response.json();
    return responseJson;
  }
  async placeOrder() {
    // Performs all action to place an order: creates a cart, adds a product, checks out
    // Create a new cart parse it and set the cart token
    const existingCart = await this.createCart();

    this.cartToken = existingCart.data.attributes.token;

    // Add a random product in a random quality of 1-10 to cart
    await this.addProductToCart();

    // Add customer details: billing and shipping address
    await this.addAddresses();

    // Select shipping method and rate details
    await this.addShippingMethod();

    // Add payment details
    await this.addPaymentDetails(true); // Use valid card details

    // Proceed with checkout
    const completeCheckoutJson = await this.completeCheckout();
    expect(completeCheckoutJson.data.attributes.state).toBe('complete');
    return completeCheckoutJson;
  }
}
