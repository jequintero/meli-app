import { httpClient } from './httpClient';
import { productApi } from './productApi';

export function apiFactory(http) {
  return {
    products: productApi(http)
  };
}

const http = httpClient('http://localhost:3000');
export const api = apiFactory(http);
