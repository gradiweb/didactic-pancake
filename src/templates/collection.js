import { defultSortBy } from "../components/sort-by";
import "../scss/collection.scss";
import { toggleDataActive } from "../utils/toggle-dataset";
import { rangeFilters } from "../components/filters-range";
import '../components/clear-filter-all';

defultSortBy();

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

rangeFilters();
