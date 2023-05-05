import { Navigation, Thumbs, FreeMode, Pagination } from "swiper";
import { breakPoint } from "./sliderBreakPoint";

export const thumbsConfig = (slidesPerView, vertical, type) => {
  const config = {
    breakpoints: breakPoint(type),
  }
  // eslint-disable-next-line no-unused-expressions
  vertical && (config.direction = "vertical");

  return config;
}

export const principalConfig = (thumbnails, slider) => {
  const config = {
    modules: [Navigation, Thumbs, Pagination],
    thumbs: {
      swiper: thumbnails,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: `.swiper-button-next${slider}`,
      prevEl: `.swiper-button-prev${slider}`,
    },
  }

  return config;
}
