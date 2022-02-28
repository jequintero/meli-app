import { httpClient } from './httpClient';
import { productApi } from './productApi';

export function apiFactory(http) {
  return {
    products: productApi(http)
  };
}

const http = httpClient(process.env.API_URL);
export const api = apiFactory(http);
