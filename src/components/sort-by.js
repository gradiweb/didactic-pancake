import { $Q } from "../utils/query-selector";

Shopify.queryParams = {};

/**
 * Update sort_by query parameter on select change
 */
export const defultSortBy = () => {
  $Q('#sort-by')
  .addEventListener(
    'change',
    function({ target }) {
      Shopify.queryParams.sort_by = target.value;
      location.search = new URLSearchParams(Shopify.queryParams).toString();
  });
}

/**
 * Preserve existing query parameters
 */
(function() {
  if (location.search.length) {
    let params = location.search.substring(1).split('&');
  
    for (var i = 0; i < params.length; i++) {
      let keyValue = params[i].split('=');
  
      if (keyValue.length) {
        Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
      }
    }
  }
})();
