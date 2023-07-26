import { barProgress } from "../../utils/bar-progress";
import { $Q } from "../../utils/query-selector"
import { createInterception } from "../../utils/script-defer";
import { btnAddToCart, openCloseCart } from "./cart";
import { loadSliderByEvent } from "../../components/slider-component";
import ItemCart from "./cart-item";

const initCart = () => {
  openCloseCart();

  const formAddFormUpsell = $Q(".add-product-cart-upsell");
  const cart = $Q('item-cart');

  if (formAddFormUpsell) createInterception(formAddFormUpsell, () => btnAddToCart(".add-product-cart-upsell"));
  if (cart) createInterception(cart, () => loadChangeCart());
}

const loadChangeCart = () => {
  if ($Q(".slider-js.swiperElsidecart")) loadSliderByEvent($Q(".slider-js.swiperElsidecart"));
  window.customElements.define('item-cart', ItemCart);
  barProgress($Q('#progress-bar-data'));
}

export { initCart };
