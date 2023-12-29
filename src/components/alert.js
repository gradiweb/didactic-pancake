import { $Q, $Qll } from "../utils/query-selector";
import {sum} from "../utils/sum";
/**
 *
 * we control the price range filter in order to avoid that the minimum
 * value is greater than the highest value and that the highest
 * value is not less than the lowest value
 *
 */

export function alertBoxGradi() {
  // Get first number
  let numberOne = prompt("Insert the first number:");

  // Get second number
  let numberTwo = prompt("Insert the second number:");

  // Convertir los valores ingresados a números
  numberOne = parseFloat(numberOne);
  numberTwo = parseFloat(numberTwo);

  const result = sum(numberOne, numberTwo);

  if (!isNaN(result)) {
      alert("The sum is: " + numberOne + " y " + numberTwo + " es: " + result);
  } else {
      alert("Please insert valid numbers.");
  }

}
