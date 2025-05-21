import { faker } from '@faker-js/faker';
import { User } from '../types/types';

export const adminUser: User = {
  email: process.env.ADMIN_EMAIL!,
  password: process.env.ADMIN_PASSWORD!,
};

export const adminAccessTokenFile = 'playwright/.auth/adminAccessToken.json';

// faker.internet.password({ length: 12 })
export function generateUser(): User {
  return {
    email: faker.internet.email(),
    password: 'spree123',
  };
}

export const customerDetails = {
  order: {
    email: faker.internet.email(),
    bill_address_attributes: {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      address1: faker.location.streetAddress(),
      city: faker.location.city(),
      country_iso3: faker.location.countryCode('alpha-3'),
      address2: faker.location.secondaryAddress(),
      phone: faker.phone.number(),
      zipcode: '91234',
      state_name: faker.location.state(),
      company: faker.company.name(),
      state_code: faker.location.state({ abbreviated: true }),
      country_iso: 'US',
    },
    ship_address_attributes: {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      address1: faker.location.streetAddress(),
      city: faker.location.city(),
      country_iso: 'US',
      address2: faker.location.secondaryAddress(),
      phone: faker.phone.number(),
      zipcode: faker.location.zipCode(),
      state_name: faker.location.state({ abbreviated: true }),
      company: faker.company.name(),
      label: faker.word.adjective(100),
    },
  },
};
