import { Locator } from '@playwright/test';
import { PageObject } from './basePageObject';

export class SearchComponent extends PageObject {
  public readonly searchInput: Locator = this.host.getByRole('textbox', { name: 'Search' });
  protected readonly searchIcon: Locator = this.host.locator('#search-suggestions').getByRole('button').nth(1);
  protected readonly closeButton: Locator = this.host.getByRole('button', { name: 'Close' });
  private _searchString: string = '';

  set searchString(searchString: string) {
    this._searchString = searchString;
  }

  get searchString() {
    return this._searchString;
  }

  async enter() {
    await this.searchInput.fill(this.searchString);
    await this.searchIcon.click();
  }
}
