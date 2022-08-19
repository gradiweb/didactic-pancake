import "swiper/css";
import "../scss/main.scss";
import "../utils/hello";
import "../components/slider-swiper";
import { variantOnChange } from "../components/variants-product";
import { openAccordion } from "../utils/accordion";
import { openDropDown } from "../components/header";
import { toggleDataActive } from "../utils/toggle-dataset";
import { openPopUpVideo } from "../components/popupvideo";

variantOnChange(".variants");
openAccordion();
openDropDown();
openPopUpVideo();
toggleDataActive("#burger-nav-js", "#nav-list-js");