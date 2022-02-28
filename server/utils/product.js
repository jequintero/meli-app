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
  const { integers, decimals } = splitDecimals(price.toLocaleString('es'));
  return {
    id,
    title,
    price: {
      currency: currency_id,
      amount: integers,
      decimals: formatDecimal(decimals)
    },
    condition: condition === 'new' ? 'Nuevo' : 'Usado',
    free_shipping: shipping.free_shipping
  };
};

export const buildAuthorInformation = () => ({
  author: {
    name: '',
    lastname: ''
  }
});

const splitDecimals = number => {
  const splittedNumber = number.split(',');

  return {
    integers: splittedNumber[0],
    decimals: splittedNumber.length > 1 ? splittedNumber[1] : 0
  };
};

const formatDecimal = number =>
  `${number}`.length <= 1 ? number * 10 : number;
