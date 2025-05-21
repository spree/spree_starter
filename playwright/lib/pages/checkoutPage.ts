import { Page } from './basePage';
import { Page as PlaywrightPage } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class CheckoutPage extends Page {
  protected readonly url: string;
  constructor(page: PlaywrightPage) {
    super(page);
    this.url = '/';
  }
  async fillEmail(email: string) {
    await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
  }
  async fillShippingAddress() {
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName());
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName());
    await this.page.getByRole('textbox', { name: 'Address', exact: true }).fill(faker.location.streetAddress());
    await this.page.getByRole('textbox', { name: 'City' }).fill(faker.location.city());
    await this.page.locator('#order_ship_address_attributes_state_id').selectOption('Alaska');
    await this.page.getByRole('textbox', { name: 'Zip Code' }).fill(faker.location.zipCode());
    await this.page.getByRole('textbox', { name: 'Phone' }).fill(faker.phone.number());
    // await this.page.getByRole('button', { name: 'Save and Continue' }).click();
  }

  async acceptDefaultShipping() {
    await this.page.getByRole('button', { name: 'Save and Continue' }).click();
  }

  async fillPaymentDetail() {
    await this.page.getByRole('textbox', { name: 'Card Number' }).focus();
    await this.page.getByRole('textbox', { name: 'Card Number' }).pressSequentially('4111111111111111');

    await this.page.getByRole('textbox', { name: 'Expiration Date' }).pressSequentially('122031');

    await this.page.getByRole('textbox', { name: 'CVV' }).pressSequentially('111');
  }

  async saveAndContinue() {
    await this.page.getByRole('button', { name: 'Save and Continue' }).click();
  }

  async pay() {
    await this.page.getByRole('button', { name: 'Pay' }).click();
  }
}
