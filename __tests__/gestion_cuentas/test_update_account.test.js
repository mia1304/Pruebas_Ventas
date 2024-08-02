// test/test_update_account.test.js
//Integracion
// caja negra:verifi.  funcionalidad
//estado: verifi. estado y resultad
const { createAccount, updateAccount, getAccounts } = require('../../src/accounts');

describe('Account Management', () => {
  test('should update account information', () => {
    createAccount('usuario1', 'contraseña123');
    const result = updateAccount('usuario1', 'nuevaContraseña123');
    expect(result).toBe('Account updated successfully');
    const accounts = getAccounts();
    expect(accounts).toContainEqual({ usuario: 'usuario1', contraseña: 'nuevaContraseña123' });
  });
});

