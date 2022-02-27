const cleanCategories = categoryNode => {
  return categoryNode.values.reduce((filtered, categoryItem) => {
    const values = categoryItem.path_from_root.map(item => item.name);
    filtered.push(...values);
    return filtered;
  }, []);
};

const list = apiResponse => {
  //Get categories
  const categoryNode = apiResponse.filters.find(
    filterItem => filterItem.id === 'category'
  );

  return {
    author: {
      name: '',
      lastname: ''
    },
    categories: categoryNode ? cleanCategories(categoryNode) : [],
    items: apiResponse.results.map(item => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      state_name: item.address.state_name
    }))
  };
};

module.exports = {
  list
};
