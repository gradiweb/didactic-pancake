import Swiper from "swiper";
import { principalConfig, thumbsConfig } from "../utils/slider-configuration";

export function mountSlider(main) {
  const { dataset: { direction = null } } = main;
  let thumbnails;
  let principalClass;

  const typeSlider = {
    "horizontal-outside": () => renderHorizontal(),
    "vertical-left": () => renderVerticalOutside(),
    "vertical-right": () => renderVerticalOutside(),
    "vertical-inside": () => renderVerticalInside(),
    "horizontal-inside": () => renderHorizontalInside(),
  }

  const renderHorizontal = () => {
    /**
     * HORIZONTAL SWIPER SLIDER: media product page
     */
    thumbnails = new Swiper(".horizontal-swipper-thumbs", thumbsConfig(3, false, "horizontalOutsideBreak"));
    principalClass = ".horizontal-swipper-principal";
  }

  const renderVerticalOutside = () => {
     /**
      * VERTICAL SWIPER SLIDER LEFT OUTSIDE: media product page
    */
     thumbnails = new Swiper(".vertical-outside-swipper-thumbs", thumbsConfig(3, true, "verticalOutsideBreak"));
     principalClass = ".vertical-outside-swipper-principal";
  }

  const renderVerticalInside = () => {
    /**
     * VERTICAL SWIPER SLIDER INSIDE: media product page
     */
    thumbnails = new Swiper(".vertical-inside-swipper-thumbs", thumbsConfig(4, true, "verticalInsideBreak"));
    principalClass = ".vertical-inside-swipper-principal";
  }

  const renderHorizontalInside = () => {
    /**
     * HORIZONTAL SWIPER SLIDER INSIDE: media product page
     */
    thumbnails = new Swiper(".horizontal-inside-swipper-thumbs", thumbsConfig(4, false, "horizontalInsideBreak"));
    principalClass = ".horizontal-inside-swipper-principal";
  }

  typeSlider[direction]();

  // eslint-disable-next-line no-unused-expressions
  direction && (
    new Swiper(
      principalClass,
      principalConfig(thumbnails, principalClass),
    )
  )

  // eslint-disable-next-line no-unused-expressions

}
