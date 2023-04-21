import "swiper/css";
import "../scss/main.scss";
import "../utils/hello";
import "../components/slider-swiper";

import { variantOnChange } from "../components/variants-product";

import {
  btnAddToCart,
  deleteItem,
  onChangeItemCart,
  openCloseCart,
} from "../components/cart";
import { setQuantity } from "../utils/input-quantity";

import { openAccordion } from "../utils/accordion";
import { openDropDown } from "../components/header";
import { toggleDataActive } from "../utils/toggle-dataset";
import { isRegisteredUser } from "../components/news-letters";
import { lazyVideo } from '../components/lazy-videos'
import "../components/video-frame"

isRegisteredUser();

btnAddToCart(".add-product-cart");
btnAddToCart(".add-product-cart-upsell");

openCloseCart();
deleteItem();
setQuantity();
onChangeItemCart();

openAccordion();
openDropDown();
toggleDataActive("#burger-nav-js", "#nav-list-js");
lazyVideo();
