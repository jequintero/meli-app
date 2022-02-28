import { httpClient } from './httpClient';
import { productApi } from './productApi';

export function apiFactory(http) {
  return {
    products: productApi(http)
  };
}

const http = httpClient(
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : process.env.API_URL
);
export const api = apiFactory(http);
