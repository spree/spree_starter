/* eslint-disable @typescript-eslint/no-explicit-any */
import { APIRequestContext, APIResponse, expect } from '@playwright/test';

export class BaseApiClient {
  private _accessToken: string = '';

  constructor(public request: APIRequestContext) {}

  set accessToken(accessToken: string) {
    this._accessToken = accessToken;
  }
  get accessToken() {
    return this._accessToken;
  }
  async get(url: string, options: any = {}): Promise<APIResponse> {
    // Default options with Authorization header
    const defaultOptions = {
      headers: {
        Authorization: `Bearer ${this._accessToken || ''}`,
      },
    };

    // Merge the default options with the provided options
    // This ensures the test-specific options take precedence if there's overlap
    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    const response = await this.request.get(url, mergedOptions);
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async post(url: string, options: any = {}): Promise<APIResponse> {
    // Default options with Authorization header
    const defaultOptions = {
      headers: {
        Authorization: `Bearer ${this._accessToken || ''}`,
      },
    };

    // Merge the default options with the provided options
    // This ensures the test-specific options take precedence if there's overlap
    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    const response = await this.request.post(url, mergedOptions);
    return response;
  }

  async patch(url: string, options: any = {}): Promise<APIResponse> {
    // Default options with Authorization header
    const defaultOptions = {
      headers: {
        Authorization: `Bearer ${this._accessToken || ''}`,
      },
      data: options.data!,
    };

    // Merge the default options with the provided options
    // This ensures the test-specific options take precedence if there's overlap
    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };
    const response = await this.request.patch(url, mergedOptions);
    expect(response.ok()).toBeTruthy();
    return response;
  }

  async delete(url: string, options: any = {}): Promise<APIResponse> {
    // Default options with Authorization header
    const defaultOptions = {
      headers: {
        Authorization: `Bearer ${this._accessToken || ''}`,
      },
    };

    // Merge the default options with the provided options
    // This ensures the test-specific options take precedence if there's overlap
    const mergedOptions = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };
    const response = await this.request.delete(url, mergedOptions);
    expect(response.ok()).toBeTruthy();
    return response;
  }
}
