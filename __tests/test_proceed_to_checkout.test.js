const { addToCart, proceedToCheckout, getCartQuantity } = require('../src/cart');

describe('Shopping Cart', () => {
  test('should proceed to checkout', () => {
    addToCart('Casaca Hombre Jacob Negro', 'XL');
    const result = proceedToCheckout();
    expect(result).toBe('Checkout successful');
    const cartQuantity = getCartQuantity();
    expect(cartQuantity).toBe(0);
  });
});
