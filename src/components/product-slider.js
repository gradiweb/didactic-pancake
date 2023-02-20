import { $Q } from "../utils/query-selector";
import { principalConfig, thumbsConfig } from "../utils/slider-configuration";
import { createInterception } from "../utils/slider-defer";

/**
 * This function would be operated by the slider
 * @param {} thumbnails - config thumbns slider 
 * @param {String} principalClass - name class ref slider
 */
const executeSliderProduct = async (thumbnails, principalClass) => {
  const { Swiper } = await import("swiper");

  return new Swiper(
    principalClass,
    principalConfig(thumbnails),
  )
}

// evaluation direction slider
const evalDirection = async (direction) => {
  const { Swiper } = await import("swiper");

  let thumbnails;
  let principalClass;
  if (direction === '1') {
    //HORIZONTAL SWIPER SLIDER: media product page

    thumbnails = new Swiper(".horizontal-swipper-thumbs", thumbsConfig(3, false));
    principalClass = ".horizontal-swipper-principal";
  } else {
    // VERTICAL SWIPER SLIDER: media product page
    thumbnails = new Swiper(".vertical-swipper-thumbs", thumbsConfig(4, true));
    principalClass = ".vertical-swipper-principal";
  }

  return {
    thumbnails,
    principalClass,
  }
}

// mount slider initial. here start interception observer
export const mountSlider = async (main) => {
  const { dataset: { direction = null } } = main;

  if (direction) {
    const { thumbnails, principalClass } = await evalDirection(direction);
    createInterception(
      $Q(principalClass), () => executeSliderProduct(thumbnails, principalClass),
    );
  }
  // eslint-disable-next-line no-unused-expressions
}
