import { Navigation, Pagination, Swiper } from "swiper";

export function initReviewsSlider (main) {
  const swiper = new Swiper('.swiper', {
    modules: [Navigation,Pagination],

    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: true,
    centeredSlides: true,

    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
  
    pagination: {
      el: '.pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button--next',
      prevEl: '.swiper-button--prev',
    }

  });
};
