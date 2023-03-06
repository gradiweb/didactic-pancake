import "../scss/product.scss";
import { mountSlider } from "../components/product-slider";
import { $Q } from "../utils/query-selector";
import '../components/upsell-api'
import { initProductQuantity } from "../components/product-quantity";

mountSlider($Q('.swiper.main-product__slider-principal'));
initProductQuantity();
