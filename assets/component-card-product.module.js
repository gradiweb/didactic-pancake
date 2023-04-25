import { queryVariants, selectVariant } from "./component-card-product-variant.submodule";

/**
 * web component for card product.
 * manage the variant change and add to cart events from here.
 * event delegation is used, this way we avoid having to reload the events once a reload is done by section rendering.
 */
class CardProduct extends HTMLElement {
  constructor() {
    super()
  }

  /**
   * detect child elements within the web component.
   */
  connectedCallback() {

    // ? delegation of events
    this.addEventListener("click", (event) => {

      // ! event variants
      if (event.target.classList.contains("js-option")) {
        selectVariant(this);
        queryVariants(event);
      }
    })
  }
}

window.customElements.define("card-product", CardProduct);


export default CardProduct;