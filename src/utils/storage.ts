export class LocalStorage {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  cache: Record<string, any> = {};

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getItem<T = any>(key: string): Promise<T> {
    if (this.cache[key]) {
      return Promise.resolve(this.cache[key] as T);
    }

    if (typeof window === "undefined")
      return Promise.resolve(true as unknown as T);

    const value = window.localStorage.getItem(key);

    if (value === null) {
      return Promise.reject();
    }

    this.cache[key] = JSON.parse(value);

    return Promise.resolve(JSON.parse(value) as T);
  }

  removeItem(key: string): Promise<void> {
    delete this.cache[key];

    if (typeof window !== "undefined") window.localStorage.removeItem(key);

    return Promise.resolve();
  }

  setItem<T>(key: string, value: T): Promise<void> {
    delete this.cache[key];

    if (typeof window !== "undefined")
      window.localStorage.setItem(key, JSON.stringify(value));

    return Promise.resolve();
  }
}
