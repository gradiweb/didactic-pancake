import { Navigation, Thumbs, FreeMode } from "swiper";
import { breakPoint } from "./sliderBreakPoint";

export const thumbsConfig = (slidesPerView, vertical, type) => {
  const config = {
    modules: [FreeMode],
    slidesPerView: slidesPerView,
    watchSlidesProgress: true,
    freeMode: true,
    breakpoints: breakPoint(type),
  }
  // eslint-disable-next-line no-unused-expressions
  vertical && (config.direction = "vertical");

  return config;
}

export const principalConfig = (thumbnails, slider) => {
  const config = {
    modules: [Navigation, Thumbs],
    spaceBetween: 10,
    thumbs: {
      swiper: thumbnails,
    },
    navigation: {
      nextEl: `.swiper-button-next${slider}`,
      prevEl: `.swiper-button-prev${slider}`,
    },
  }

  return config;
}
