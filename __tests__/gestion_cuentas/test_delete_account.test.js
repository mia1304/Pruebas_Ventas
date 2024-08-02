// test/test_delete_account.test.js
//Integracion
// caja negra: verifi. funcionalidad
//estado: verifi. estado y resultad
const { createAccount, deleteAccount, getAccounts } = require('../../src/accounts');

describe('Account Management', () => {
  test('should delete an account', () => {
    createAccount('usuario1', 'contraseña123');
    const result = deleteAccount('usuario1');
    expect(result).toBe('Account deleted successfully');
    const accounts = getAccounts();
    expect(accounts).not.toContainEqual({ usuario: 'usuario1', contraseña: 'contraseña123' });
  });
});
