const { addToCart, getCartItems } = require('../src/cart'); // Importa las funciones necesarias

describe('Shopping Cart', () => {
  test('should add product to cart', () => {
    const result = addToCart('Casaca Hombre Jacob Negro', 'XL');
    expect(result).toBe('Product added to cart');
    const cartItems = getCartItems();
    expect(cartItems).toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' });
  });
});

