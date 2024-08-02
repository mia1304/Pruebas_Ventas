// __tests__/products.test.js
const request = require('supertest');
const { app } = require('../app');

describe('POST /products', () => {
  test('should store a new product', async () => {
    const product = {
      name: 'Casaca Hombre Jacob Negro',
      description: 'Una casaca elegante y cómoda.',
      price: '100'
    };

    const response = await request(app)
      .post('/products')
      .send(product)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toEqual({
      ...product,
      _id: 'abc'
    });
  });
});
