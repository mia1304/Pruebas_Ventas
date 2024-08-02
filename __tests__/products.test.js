// __tests__/products.test.js
//Integracion,
// Interfaz: verifi. Interfaz
// Integracion de sist.: verifi. integracion
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

//Uso de Watch
// Presiona a para ejecutar todas las pruebas.
// Presiona f para ejecutar solo las pruebas que fallaron.
// Presiona p para filtrar por un patrón de nombre de archivo regex
// Presiona t para filtrar por un patrón de nombre de prueba regex.
// Presiona q para salir del modo de observación.
// Presiona Enter para iniciar una ejecución de prueba.
