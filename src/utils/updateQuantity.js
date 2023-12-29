/**
 * This function sum numbers
 * @param {a} entries - First number
 * @param {b} entries - Second number
 */

export function updateQuantity(change) {
  const quantityInput = document.getElementById('quantity');

  let currentQuantity = parseInt(quantityInput.value, 10);
  currentQuantity += change;

  // Evitar cantidades negativas
  if (currentQuantity < 1) {
    currentQuantity = 1;
  }

  quantityInput.value = currentQuantity;
}
