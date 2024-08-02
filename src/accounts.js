// src/accounts.js
let accounts = [];

function createAccount(usuario, contraseña) {
    if (!usuario || !contraseña) return 'Error: Invalid parameters';
    accounts.push({ usuario, contraseña });
    return 'Account created successfully';
}

function login(usuario, contraseña) {
    const account = accounts.find(acc => acc.usuario === usuario && acc.contraseña === contraseña);
    return account ? true : false;
}

function updateAccount(usuario, nuevaContraseña) {
    const account = accounts.find(acc => acc.usuario === usuario);
    if (account) {
        account.contraseña = nuevaContraseña;
        return 'Account updated successfully';
    }
    return 'Error: Account not found';
}

function deleteAccount(usuario) {
    accounts = accounts.filter(acc => acc.usuario !== usuario);
    return 'Account deleted successfully';
}

function getAccounts() {
    return accounts;
}

module.exports = {
    createAccount,
    login,
    updateAccount,
    deleteAccount,
    getAccounts
};

