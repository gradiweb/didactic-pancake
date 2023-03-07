import { $Q, $Qll } from '../utils/query-selector'
import { createInterception } from '../utils/slider-defer';

/**
 * Create new slider with arrows
 * @param {String} id - className reference in DOM
 * @param {Boolean} infiniy - prams option, infinity or no
 */
const configArrows = async (id, infinity = false) => {
  const { Swiper, Navigation, FreeMode } = await import('swiper');

  // eslint-disable-next-line no-new
  new Swiper(id, {
    modules: [Navigation, FreeMode],
    slidesPerView: "2",
    spaceBetween: 25,
    loop: infinity,
    navigation: {
      nextEl: `.swiper-button-next[data-id="${id.substr(1)}"]`,
      prevEl: `.swiper-button-prev[data-id="${id.substr(1)}"]`,
    },
    freeMode: true,
    breakpoints: {
      200: {
        slidesPerView: 1,
        spaceBetween: 28,
        freeMode: false,
      },
      749: {
        slidesPerView: 3,
        spaceBetween: 28,
        freeMode: false,
      },
    },
  });
}

/**
 * Create new slider with pagination
 * @param {String} id - className reference in DOM
 */
export const configPagination = async (id) => {
  const { Swiper, FreeMode, Pagination } = await import('swiper');

  // eslint-disable-next-line no-new
  new Swiper(id, {
    modules: [Pagination, FreeMode],
    slidesPerView: "auto",
    spaceBetween: 25,
    pagination: {
      el: `.swiper-pagination[data-id="${id.substr(1)}"]`,
    },
    freeMode: true,
    breakpoints: {
      749: {
        slidesPerView: 3,
        spaceBetween: 28,
        freeMode: false,
      },
    },
  });
}

export const configSwiperUpsell = async () => {
  const { Swiper, FreeMode, Navigation } = await import('swiper');

  new Swiper('.slider_upsell', {
    modules: [Navigation, FreeMode],
    slidesPerView: "auto",
    spaceBetween: 25,
    navigation: {
      nextEl: `.swiper-button-next[data-slider="upsell"]`,
      prevEl: `.swiper-button-prev[data-slider="upsell"]`,
    },
    freeMode: true,
    breakpoints: {
      749: {
        slidesPerView: 3,
        spaceBetween: 28,
        freeMode: false,
      },
    },
  })
}

/**
 * Create new slider - 1 slide per view
 * @param {String} id - className reference in DOM
 */
// que pasa con este slider. cuando se puede implmeentar, no veo que se llame
export const swiperSmall = async (id) => {
  const { Swiper, FreeMode, Pagination, Autoplay } = await import('swiper');
  new Swiper(".slider_small", {
    modules: [Pagination, Autoplay, FreeMode],
    slidesPerView: 1,
    spaceBetween: 25,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    freeMode: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  })
};


/**
 * Iteration to create all sliders with arrows
 */
export const swiperArrows = (() => {
  
  $Qll(".slider_arrows").map((slide) => {
    // start observing
    createInterception(slide, configArrows);
  })
  $Qll(".slider_arrows-infinity").map((slide) => {
    // start observing
    createInterception(slide, () => configArrows(`#${slide.id}`), true);
  })
})();

/**
 * Iteration to create all sliders with pagination
 */
export const swiperPagination = (() => {
  $Qll(".slider_pagination")
    .map((slide) => configPagination(`#${slide.id}`))
})();

export const sliderUpsell = () => {
  if (!$Q('.slider_upsell')) return;
  createInterception($Q('.slider_upsell'), configSwiperUpsell);
};
/**
 * Render small slider
 */
export const renderSmallSlider =  (() => {
  if (!$Q(".slider_small")) return;
  createInterception($Q(".slider_small"), swiperSmall);
})();
