export function productApi(http) {
  return {
    filter: query => {
      return http.get(`/api/items?q=${query}`);
    },
    byId: id => {
      return http.get(`/api/items/${id}`);
    }
  };
}
