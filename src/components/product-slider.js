import Swiper from "swiper";
import { $Q } from "../utils/query-selector";
import { principalConfig, thumbsConfig } from "../utils/slider-configuration";
import { createInterception } from "../utils/swiper-defer";

export function mountSlider(main) {
  console.log("load slider product", main);

  const { dataset: { direction = null } } = main;

  if (direction) {
    const { principalClass } = evalDirection(direction);
    createInterception(
      $Q(principalClass), () => executeSliderProduct(direction),
    );
  }
  // eslint-disable-next-line no-unused-expressions
}

const executeSliderProduct = async (direction) => {
  const { Swiper } = await import("swiper");

  const { thumbnails, principalClass } = evalDirection(direction);
  return new Swiper(
    principalClass,
    principalConfig(thumbnails),
  )
}

const evalDirection = (direction) => {
  let thumbnails;
  let principalClass;
  if (direction === '1') {
    /**
     * HORIZONTAL SWIPER SLIDER: media product page
     */
    thumbnails = new Swiper(".horizontal-swipper-thumbs", thumbsConfig(3, false));
    principalClass = ".horizontal-swipper-principal";
  } else {
    /**
     * VERTICAL SWIPER SLIDER: media product page
     */
    thumbnails = new Swiper(".vertical-swipper-thumbs", thumbsConfig(4, true));
    principalClass = ".vertical-swipper-principal";
  }

  return {
    thumbnails,
    principalClass,
  }
}
