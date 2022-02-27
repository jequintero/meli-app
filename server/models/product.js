import fetch from 'isomorphic-unfetch';
import { list } from '../formatter/product';
import { LIMIT, EXTERNAL_API_URL } from '../constants';

const find = async searchValue => {
  const result = await fetch(
    `${EXTERNAL_API_URL}sites/MLA/search?q=${searchValue}&limit=${LIMIT}`
  );
  const resultJson = await result.json();

  return list(resultJson);
};

module.exports = {
  find
};
