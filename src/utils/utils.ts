import { AxiosRequestConfig } from "axios";

export function createAuthorizationHeader(
  headers: AxiosRequestConfig["headers"],
  token?: string
): AxiosRequestConfig["headers"] {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  if (!token) return headers;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return { ...headers, Authorization: `Bearer ${token}` };
}

export function createUrl(
  uri: string,
  baseUrl: string,
  query?: Record<string, string>
): string {
  let url = uri[0] !== "/" ? uri : uri.slice(1);
  const domainUrl =
    baseUrl[baseUrl.length - 1] !== "/"
      ? baseUrl
      : baseUrl.slice(0, baseUrl.length - 1);

  if (query) {
    url = `${url}?${new URLSearchParams(query).toString()}`;
  }

  return `${domainUrl}/${url}`;
}
