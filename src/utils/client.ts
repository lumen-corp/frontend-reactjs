import Config from '@config';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';


const v1Api = axios.create({ baseURL: Config.ApiUrl });

type MaybeRetriedRequest = AxiosRequestConfig & { _retry?: boolean };
export type InterceptedError = AxiosError & { _shouldExit?: boolean };

async function responseInterceptor(error: AxiosError<{ msg?: string }>): Promise<AxiosResponse> {
  const originalRequest = error.config as MaybeRetriedRequest;
  const { data, status } = error.response || {};

  //   Handle 401 errors (with refresh if expired)
  // Delete tokens and logout if invalid

  return Promise.reject(error);
}

v1Api.interceptors.response.use(undefined, responseInterceptor);

class Client {
  static v1 = v1Api;
}

export default Client;
