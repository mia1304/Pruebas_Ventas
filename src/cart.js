let cart = [];

function addToCart(product, size) {
  cart.push({ product, size });
  return 'Product added to cart';
}

function removeFromCart(product, size) {
  cart = cart.filter(item => !(item.product === product && item.size === size));
  return 'Product removed from cart';
}

function getCartItems() {
  return cart;
}

function getCartQuantity() {
  return cart.length;
}

function proceedToCheckout() {
  cart = [];
  return 'Checkout successful';
}

module.exports = {
  addToCart,
  removeFromCart,
  getCartItems,
  getCartQuantity,
  proceedToCheckout
};
