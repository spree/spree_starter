import { Page } from './basePage';
import { Page as PlaywrightPage } from '@playwright/test';

export class pageName extends Page {
  protected readonly url: string;
  constructor(page: PlaywrightPage) {
    super(page);
    this.url = '/';
  }
  async goto() {
    await this.page.goto('/path');
  }

  async method1() {
    /*...*/
  }

  async method2() {
    /*...*/
  }
}
