import { type Locator } from 'playwright';
// import { User } from '../../lib/types/user';

export abstract class PageObject {
  constructor(public readonly host: Locator) {}
}
