import { $Q } from "../utils/query-selector";
import { principalConfig, thumbsConfig } from "../utils/slider-configuration";
import { createInterception } from "../utils/slider-defer";


const executeSliderProduct = async (thumbnails, principalClass) => {
  const { Swiper } = await import("swiper");

  return new Swiper(
    principalClass,
    principalConfig(thumbnails),
  )
}

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

export const mountSlider = async (main) => {

  const { dataset: { direction = null } } = main;

  if (direction) {
    const { thumbnails, principalClass } = await evalDirection(direction);
    console.log("edsefsef", {thumbnails, principalClass});
    createInterception(
      $Q(principalClass), () => executeSliderProduct(thumbnails, principalClass),
    );
  }
  // eslint-disable-next-line no-unused-expressions
}
