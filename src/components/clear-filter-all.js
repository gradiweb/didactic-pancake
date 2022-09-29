import { $Q } from "../utils/query-selector";

const clearFilterAll = () => {
  const base = document.location.pathname;

  document.location.href = base;

}

(function () {
  $Q('.clear-filter-js').addEventListener('change', clearFilterAll)
}());
