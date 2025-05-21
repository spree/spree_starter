import { type Locator } from '@playwright/test';
import { PageObject } from './basePageObject';
import '../datafactory/labels';

export class NavigationBar extends PageObject {
  protected readonly logoHomePage: Locator = this.host.getByRole('link', { name: 'Shop' });
  protected readonly search: Locator = this.host.getByRole('button', { name: 'Search' });
  protected readonly shopAll: Locator = this.host.getByRole('link', { name: 'Shop All' });
  protected readonly onSale: Locator = this.host.getByRole('link', { name: 'On sale' });
  protected readonly newArrivals: Locator = this.host.getByRole('link', { name: 'New arrivals' });
  protected readonly blog: Locator = this.host.getByRole('link', { name: 'Blog' });
  protected readonly accountIcon: Locator = this.host.getByRole('button').nth(1); // TODO: the element is missing the #id and proper identifiers hence using `.first()`
  protected readonly wishlistIcon: Locator = this.host.locator('#wishlist-icon');
  protected readonly cartIcon: Locator = this.host.getByRole('link', { name: 'Cart' });

  async navToSearch() {
    await this.search.click();
  }

  async navToShopAll() {
    await this.shopAll.click();
  }

  async navToOnSale() {
    await this.onSale.click();
  }

  async navToNewArrivals() {
    await this.newArrivals.click();
  }

  async navToBlog() {
    await this.blog.click();
  }

  async navToAccount() {
    await this.accountIcon.click();
  }

  async navToWishlist() {
    await this.wishlistIcon.click();
  }

  async navToCart() {
    await this.cartIcon.click();
  }

  async returnHome() {
    await this.logoHomePage.click();
  }
}
