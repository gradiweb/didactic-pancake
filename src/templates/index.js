import "../scss/main.scss";

import { loadSlider } from "../components/slider-component";
import { cartLoadDefer } from "../components/cart-load-defer";
import { headerFooterDefer } from "../components/header-footer-defer";
import { sectionsLoadDefer } from "../components/sections-defer";
import initWindows from "../components/window";

cartLoadDefer();
headerFooterDefer();
loadSlider();
sectionsLoadDefer();

initWindows({
  control: '#burger-nav-js',
  target: '#nav-list-movil-js',
});
