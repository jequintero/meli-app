// Get an array of categories based on category object node
export const cleanCategories = categoryNode => {
  return categoryNode.values.reduce((filtered, categoryItem) => {
    const values = categoryItem.path_from_root.map(item => item.name);
    filtered.push(...values);
    return filtered;
  }, []);
};

// Build product basic information json
export const buildProductItem = product => {
  const { id, title, currency_id, price, condition, shipping } = product;

  return {
    id,
    title,
    price: {
      currency: currency_id,
      amount: price,
      decimals: 0
    },
    condition,
    free_shipping: shipping.free_shipping
  };
};

export const buildAuthorInformation = () => ({
  author: {
    name: '',
    lastname: ''
  }
});
