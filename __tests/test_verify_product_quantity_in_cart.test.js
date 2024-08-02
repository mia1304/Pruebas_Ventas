const { addToCart, removeFromCart, getCartItems, getCartQuantity } = require('../src/cart');

describe('Shopping Cart', () => {
  test('should verify product quantity in cart', () => {
    addToCart('Casaca Hombre Jacob Negro', 'XL');
    addToCart('Otro Producto', 'L');
    removeFromCart('Casaca Hombre Jacob Negro', 'XL');
    const cartQuantity = getCartQuantity();
    expect(cartQuantity).toBe(1);
    const cartItems = getCartItems();
    expect(cartItems).toContainEqual({ product: 'Otro Producto', size: 'L' });
    expect(cartItems).not.toContainEqual({ product: 'Casaca Hombre Jacob Negro', size: 'XL' });
  });
});
