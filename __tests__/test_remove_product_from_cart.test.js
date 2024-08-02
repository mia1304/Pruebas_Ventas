//Unidad
//cajanegra: verifi. funcionalidad y resultados
const { addToCart, removeFromCart, getCartItems } = require('../src/cart');

describe('Shopping Cart', () => {
  test('should remove product from cart', () => {
    addToCart('Casaca Hombre Jacob Negro', 'XL');
    const result = removeFromCart('Casaca Hombre Jacob Negro', 'XL');
    expect(result).toBe('Product removed from cart');
    const cartItems = getCartItems();
    expect(cartItems).not.toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' });
  });
});
