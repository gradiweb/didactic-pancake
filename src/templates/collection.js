import "../scss/collection.scss";
import { toggleDataActive } from "../utils/toggle-dataset";

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
