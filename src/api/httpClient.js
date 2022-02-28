import fetch from 'isomorphic-unfetch';

export function httpClient(baseURL) {
  return {
    get: (path, options) => {
      return fetch(baseURL + path, options).then(res => {
        if (!res.ok) {
          return res.json();
        }

        return res.json();
      });
    }
  };
}
