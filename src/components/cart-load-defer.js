import { barProgress } from "../utils/bar-progress";
import { setQuantity } from "../utils/input-quantity";
import { $Q } from "../utils/query-selector"
import { createInterception } from "../utils/script-defer";
import { btnAddToCart, deleteItem, onChangeItemCart, openCloseCart } from "./cart";
import { loadSliderByEvent } from "./slider-component";

export const cartLoadDefer = () => {
  openCloseCart();

  const formAddFormUpsell = $Q(".add-product-cart-upsell");
  const cart = $Q('.cart-close');

  if (formAddFormUpsell) createInterception(formAddFormUpsell, () => btnAddToCart(".add-product-cart-upsell"));
  if (cart) createInterception(cart, () => loadChangeCart());

}

const loadChangeCart = () => {
  if ($Q(".slider-js.swiperElsidecart")) loadSliderByEvent($Q(".slider-js.swiperElsidecart"));
  deleteItem();
  onChangeItemCart();
  setQuantity();
  barProgress($Q('#progress-bar-data'));
}
