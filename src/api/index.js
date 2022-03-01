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
    : 'https://cryptic-earth-37530.herokuapp.com'
);
export const api = apiFactory(http);
