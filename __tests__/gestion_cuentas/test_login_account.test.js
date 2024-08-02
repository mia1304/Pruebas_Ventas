// test/test_login_account.test.js
//Unidad 
// caja negra: verifi. funcionalidad y estado

const { createAccount, login, getAccounts } = require('../../src/accounts');

describe('Account Management', () => {
  test('should log in with an existing account', () => {
    createAccount('usuario1', 'contraseña123');
    const result = login('usuario1', 'contraseña123');
    expect(result).toBe(true);
  });
});
