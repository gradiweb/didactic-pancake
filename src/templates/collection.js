import "../scss/collection.scss";
import { defultSortBy } from "../components/sort-by";
import { toggleDataActive } from "../utils/toggle-dataset";
import { rangeFilters } from "../components/filters-range";

defultSortBy();
rangeFilters();

toggleDataActive(
  '#filter-open',
  '#filter',
  {
    overlay: true,
  },
)

toggleDataActive(
  '.filter-form__name svg',
  '#filter',
  {
    overlay: true,
  },
)
