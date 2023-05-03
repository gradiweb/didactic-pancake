import { setQuantity } from "../utils/input-quantity";
import { $Q } from "../utils/query-selector"
import { createInterception } from "../utils/script-defer";
import { btnAddToCart, deleteItem, onChangeItemCart, openCloseCart } from "./cart";

export const cartLoadDefer = () => {

  openCloseCart();

  const formAddProduct = $Q(".add-product-cart");
  const formAddFormUpsell = $Q(".add-product-cart-upsell");
  const itemCart = $Q('.item-cart-js');

  if (formAddProduct) createInterception(formAddProduct, () => btnAddToCart(".add-product-cart"));

  if (formAddFormUpsell) createInterception(formAddFormUpsell, () => btnAddToCart(".add-product-cart-upsell"));

  if (itemCart) createInterception(itemCart, () => loadChangeCart());

}

const loadChangeCart = () => {
  deleteItem();
  onChangeItemCart();
  setQuantity();
}
