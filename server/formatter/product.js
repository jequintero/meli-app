import {
  cleanCategories,
  buildProductItem,
  buildAuthorInformation
} from '../utils/product';

export const list = apiResponse => {
  const { results } = apiResponse;
  //Get categories
  const categoryNode = apiResponse.filters.find(
    filterItem => filterItem.id === 'category'
  );

  return {
    ...buildAuthorInformation(),
    categories: categoryNode ? cleanCategories(categoryNode) : [],
    items: results.map(item => ({
      ...buildProductItem(item),
      picture: item.thumbnail,
      state_name: item.address.state_name
    }))
  };
};

export const one = apiResponse => {
  const { sold_quantity, pictures } = apiResponse;
  return {
    ...buildAuthorInformation(),
    item: {
      ...buildProductItem(apiResponse),
      picture: pictures[0].url,
      sold_quantity
    }
  };
};

export const description = apiResponse => {
  const { plain_text } = apiResponse;

  return {
    description: plain_text
  };
};
