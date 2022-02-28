import fetch from 'isomorphic-unfetch';
import { LIMIT, EXTERNAL_API_URL } from '../constants';

const find = async searchValue => {
  const result = await fetch(
    `${EXTERNAL_API_URL}sites/MLA/search?q=${searchValue}&limit=${LIMIT}`
  );
  const resultJson = await result.json();
  return resultJson;
};

const findDetailsById = async productId => {
  const result = await fetch(`${EXTERNAL_API_URL}items/${productId}`);
  const resultJson = await result.json();
  return resultJson;
};

const findDescriptionById = async productId => {
  const result = await fetch(
    `${EXTERNAL_API_URL}items/${productId}/description`
  );
  const resultJson = await result.json();
  return resultJson;
};

module.exports = {
  find,
  findDetailsById,
  findDescriptionById
};
