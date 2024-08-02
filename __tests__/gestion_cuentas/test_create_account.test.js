// test/test_create_account.test.js
//Integracion
// caja negra:verifi.  funcionalidad
//estado: verifi. estado y resultad

const { createAccount, getAccounts } = require('../../src/accounts');

describe('Account Management', () => {
  test('should create a new account', () => {
    const result = createAccount('usuario1', 'contraseña123');
    expect(result).toBe('Account created successfully');
    const accounts = getAccounts();
    expect(accounts).toContainEqual({ usuario: 'usuario1', contraseña: 'contraseña123' });
  });
});
