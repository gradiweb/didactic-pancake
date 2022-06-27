import { defultSortBy } from "../components/sort-by";
import "../scss/collection.scss";
import { toggleDataActive } from "../utils/toggle-dataset";

defultSortBy();

toggleDataActive(
  '#filter-open',
  '#filter',
  {
    overlay: true
  }
)

toggleDataActive(
  '.filter-form_name svg',
  '#filter',
  {
    overlay: true
  }
)
