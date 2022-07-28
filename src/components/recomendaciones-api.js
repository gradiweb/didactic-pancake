const RECOMMENDATIONS_SECTION = document.querySelector('#product-recommendations');
const ID_PRODUCT = document.querySelector('#form-product').dataset.product;

function getFetch() {
  fetch(
    `${window.Shopify.routes.root}recommendations/products?product_id=${ID_PRODUCT}&limit=4&section_id=product-recomendation`
  )
    .then((response) => response.text())
    .then((text) => {
      const html = document.createElement('div');
      html.innerHTML = text;
      const recommendations = html.querySelector('#product-recommendations');

      if (recommendations && recommendations.innerHTML.trim().length) {
        RECOMMENDATIONS_SECTION.innerHTML = recommendations.innerHTML;
      }
    });
}
if (ID_PRODUCT) getFetch();
