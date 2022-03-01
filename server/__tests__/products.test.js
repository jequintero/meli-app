import supertest from 'supertest';
import { app } from '../app';
const api = supertest(app);

const RESPONSE_CONTENT_TYPE_REGEX = /application\/json/;

// ### Test data ###
const SEARCH_TEXT = 'mustang';
const CORRECT_PRODUCT_ID = 'MLA1121779673';
const WRONG_PRODUCT_ID = 'MLA1121111111';
const WRONG_FORMAT_PRODUCT_ID = 'LLA1121779673';
// ###          ###

describe('api/items', () => {
  test('Response type should be charset utf-8', async () => {
    await api
      .get('/api/items')
      .expect('Content-Type', RESPONSE_CONTENT_TYPE_REGEX);
  });
  test('Return status 400 if query is undefined', async () => {
    await api.get('/api/items').expect(400);
  });
  test('Return status 400 if middleware detects wrong query name', async () => {
    await api.get(`/api/items?k=${SEARCH_TEXT}`).expect(400);
  });
  test('Return status 200 if query is named correctly', async () => {
    await api
      .get(`/api/items?q=${SEARCH_TEXT}`)
      .expect(200)
      .expect('Content-Type', RESPONSE_CONTENT_TYPE_REGEX);
  });
  test('Validate limit of 4 on external api call. Results should be less than 5', async () => {
    const response = await api.get(`/api/items?q=${SEARCH_TEXT}`).expect(200);
    expect(response.body.items.length).toBeLessThan(5);
  });
});

describe('api/items/:id', () => {
  test('Response type should be charset utf-8', async () => {
    await api
      .get(`/api/items/${CORRECT_PRODUCT_ID}`)
      .expect('Content-Type', RESPONSE_CONTENT_TYPE_REGEX);
  });
  test('Return status 400 if param is wrong', async () => {
    await api.get(`/api/items/${WRONG_PRODUCT_ID}`).expect(400);
  });
  test('Return status 400 if middleware detects wrong format on param', async () => {
    await api.get(`/api/items/${WRONG_FORMAT_PRODUCT_ID}`).expect(400);
  });
  test('Return status 200 if query is named correctly', async () => {
    await api
      .get(`/api/items?q=${CORRECT_PRODUCT_ID}`)
      .expect(200)
      .expect('Content-Type', RESPONSE_CONTENT_TYPE_REGEX);
  });
});
