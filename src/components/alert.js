import { $Q, $Qll } from "../utils/query-selector";

/**
 *
 * we control the price range filter in order to avoid that the minimum
 * value is greater than the highest value and that the highest
 * value is not less than the lowest value
 *
 */

// Get first number
let numberOne = prompt("Insert the first number:");

// Get second number
let numberTwo = prompt("Insert the second number:");

// Convertir los valores ingresados a números
numberOne = parseFloat(numberOne);
numberTwo = parseFloat(numberTwo);

// Verificar si la conversión fue exitosa y realizar la suma
if (!isNaN(numberOne) && !isNaN(numberTwo)) {
    const result = numberOne + numberTwo;

    // Mostrar el resultado en un alert
    alert("The sum is: " + numberOne + " y " + numberTwo + " es: " + result);
} else {
    // Mostrar un mensaje de error si no se ingresaron números válidos
    alert("Please insert valid numbers.");
}
