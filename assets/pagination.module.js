import "./pagination.scss";
import { initPagination } from "./pagination.core";
import { buttonLoadMore } from "./pagination-button.submodule";
import "./component-card-product.module";
/**
 * modules required: [buttonLoadMore || infinityScroll]
 * modules optionals (import "./component-card-product.module";)
 */
initPagination({
  modules: [buttonLoadMore]
});