import { $Q, $Qll } from "../utils/query-selector";
import {updateQuantity} from "../utils/updateQuantity";
/**
 *
 * we control the price range filter in order to avoid that the minimum
 * value is greater than the highest value and that the highest
 * value is not less than the lowest value
 *
 */

export function quantitySelector() {
  const decrementButton = document.getElementById('decrement');
  const incrementButton = document.getElementById('increment');


  decrementButton.addEventListener('click', function () {
    updateQuantity(-1);
  });

  incrementButton.addEventListener('click', function () {
    updateQuantity(1);
  });

}
