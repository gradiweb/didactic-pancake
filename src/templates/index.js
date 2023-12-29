import "../scss/main.scss";

import { loadSlider } from "../components/slider-component";
import { headerFooterDefer } from "../components/header-footer-defer";
import { sectionsLoadDefer } from "../components/sections-defer";
import { alertBoxGradi } from "../components/alert";
import initWindows from "../components/window";

headerFooterDefer();
loadSlider();
sectionsLoadDefer();
alertBoxGradi();

initWindows({
  control: '#burger-nav-js',
  target: '#nav-list-movil-js',
});
