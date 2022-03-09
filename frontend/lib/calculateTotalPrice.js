export default function calculateTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    // products can be deleted, but the product could still be in your cart
    if (!cartItem.product) return tally;

    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
