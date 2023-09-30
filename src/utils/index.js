/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */
export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => {
    // Use parseFloat to ensure precise calculation
    const price = parseFloat(product.price.toFixed(2));
    // Multiply the product's price by its quantity and add to the sum
    sum += price * (product.quantity || 1);
  });
  // Use parseFloat to ensure the final result is precise
  return parseFloat(sum.toFixed(2));
};
