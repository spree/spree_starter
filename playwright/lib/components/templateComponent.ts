import { type Locator } from '@playwright/test';
import { PageObject } from './basePageObject';

export class nameComponent extends PageObject {
  public readonly element: Locator = this.host.getByRole('button');

  async functionName() {
    /*...*/
  }

  async fillPassword() {
    /*...*/
  }
}
