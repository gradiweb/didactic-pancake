import { $Q, $Qll } from "../utils/query-selector";

/**
 *
 * we control the price range filter in order to avoid that the minimum
 * value is greater than the highest value and that the highest
 * value is not less than the lowest value
 *
 */
export function rangeFilters() {
  const rangein = $Qll(".range-in input");
  const pricein = $Qll(".price-in input");
  const progress = $Q('.slider-filter .pro');
  const priceGap = 0;

  rangein.forEach((input) => {
    if (pricein[0].value) {
      progress.style.left = `${(pricein[0].value / rangein[0].max) * 10000 }%`;
      progress.style.right = `${100 - (pricein[1].value / rangein[1].max) * 10000  }%`;
    }

    input.addEventListener("input", (e) => {
      const minVal = Number(rangein[0].value);
      const maxVal = Number(rangein[1].value);

      if (maxVal - minVal < priceGap) {
        if (e.target.className === "range-min") {
          // eslint-disable-next-line no-use-before-define
          rangein[0].value = cents(maxVal - priceGap);
        } else {
          // eslint-disable-next-line no-use-before-define
          rangein[1].value = cents(minVal + priceGap);
        }
      } else {
        // eslint-disable-next-line no-use-before-define
        pricein[0].value = cents(minVal, true);
        // eslint-disable-next-line no-use-before-define
        pricein[1].value = cents(maxVal, true);
        progress.style.left = `${(minVal / rangein[0].max) * 100 }%`;
        progress.style.right = `${100 - (maxVal / rangein[1].max) * 100 }%`;
      }
    });
  });
}

function cents(str, fixed) {
  const number = Number(str) / 100
  if (fixed) return number.toFixed(2);
  return number
}

(function formatValues() {
  $Qll('.price-in input').forEach(
    (item) => {
      // eslint-disable-next-line no-param-reassign
      item.value = cents(item.value, true)
    },
  )
}());
