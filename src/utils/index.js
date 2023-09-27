/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => {
      // Multiply the product's price by its quantity and add to the sum
      sum += (product.price.toFixed(2) * (product.quantity || 1));
  });
  return sum;
};