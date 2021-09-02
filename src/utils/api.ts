import Config from '@config';
import Client from '@utils/client';
import { LocalStorage } from '@utils/storage';
import { createAuthorizationHeader, createUrl } from '@utils/utils';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

type ApiOptions = {
  requiresAuthentication?: boolean;
  body?: AxiosRequestConfig['data'];
  headers?: Record<string, string>;
  method?: AxiosRequestConfig['method'];
  queryParams?: Record<string, string>;
};

export type StorageToken = { accessToken: string; refreshToken: string };

export class Api {
  private storage = new LocalStorage();

  private accessTokenKey = Config.AccessTokenKey;
  private refreshTokenKey = Config.RefreshTokenKey;
  private apiUrl = Config.ApiUrl;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async request<T = any>(uri: string, options: ApiOptions = {}): Promise<AxiosResponse<T>> {
    const {
      requiresAuthentication,
      body: data,
      headers = {},
      method = 'get',
      queryParams,
    } = options;
    const url = createUrl(uri, this.apiUrl, queryParams);
    const config: AxiosRequestConfig = { url, data, method };
    if (requiresAuthentication) {
      if (!headers.Authorization) {
        const tokens = await this.getToken();
        config.headers = createAuthorizationHeader(headers, tokens.accessToken);
      } else {
        config.headers = headers;
      }
    }

    const response = await Client.v1(config);
    return response;
  }

  async getToken(): Promise<{ accessToken: string; refreshToken?: string }> {
    const [accessToken, refreshToken] = await Promise.all([
      this.storage.getItem(this.accessTokenKey),
      this.storage.getItem(this.refreshTokenKey),
    ]);

    return { accessToken, refreshToken };
  }

  removeToken(): Promise<[void, void]> {
    return Promise.all([
      this.storage.removeItem(this.accessTokenKey),
      this.storage.removeItem(this.refreshTokenKey),
    ]);
  }

  async setToken({ token }: { token: StorageToken }): Promise<StorageToken> {
    await this.storage.setItem(this.accessTokenKey, token.accessToken);
    await this.storage.setItem(this.refreshTokenKey, token.refreshToken);
    return token;
  }
}

const api = new Api();

export { api };
