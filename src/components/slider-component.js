/* eslint-disable max-len */
import { $Q, $Qll } from '../utils/query-selector';
import { createInterception } from '../utils/slider-defer';

/**
A function that adds a script tag to the document body.
@param {string} script - The source URL of the script.
@returns {void}
*/
const addTagScript = (script) => {
  if (window.sliderScript) {
  return new Promise((resolve) => {
      resolve(true);
    })
  }

  return new Promise((resolve, reject) => {
    const scriptTag = document.createElement('script');
    scriptTag.src = script;
    scriptTag.setAttribute("id", "swiper-script");

    scriptTag.onload = () => {
      window.sliderScript = true;
      resolve(true);
    };

    scriptTag.onerror = () => {
      reject(new Error(`Failed to load script ${src}`));
    };

    const theme = $Q("#MainContent");
    theme.insertAdjacentElement('beforebegin', scriptTag);
  })

}

/**
 * Creates a slider using the Swiper library.
 * @param {Object} parent - An object containing the data necessary to build the slider.
 * @param {string} parent.slidesMobile - The number of slides to show on mobile devices.
 * @param {string} parent.slides - The number of slides to show on larger screens.
 * @param {string} parent.pagination - Whether or not to show pagination dots.
 * @param {string} parent.auto - Whether or not to automatically advance the slides.
 * @param {string} parent.speed - The time in milliseconds between automatic slide transitions.
 * @param {string} parent.script - The URL of an external script to load.
 * @param {string} parent.spacing - The amount of space between slides, in pixels.
 */
export const createSlider = (parent) => {
  const PAGE_ONE = 1;
  const {
    slidesMobile,
    slides,
    pagination,
    navigation,
    customArrows,
    auto,
    speed,
    spacing,
  } = parent.dataset;

  const idSlider = parent;

  const swiperParams = {
    slidesPerView: Number(slidesMobile),
    pagination: pagination === "true",
    navigation: navigation === "true",
    spaceBetween: Number(spacing),
    loop: auto === "true",
    ...((speed > 0) && {
      autoplay: {
        delay: Number(speed),
        disableOnInteraction: false,
      },
    }),
    breakpoints: {
      640: {
        slidesPerView: Number(slides) === PAGE_ONE ? Number(slides) : Number(slidesMobile) + 1,
      },
      1024: {
        slidesPerView: Number(slides),
      },
    },
  };

  if (customArrows) {
    loadArrows(idSlider);
  }

  Object.assign(idSlider, swiperParams);

  return idSlider.initialize();
}

const loadArrows = (idSlider) => {
  if (!$Q(".swiper-button", idSlider.parentNode)) return;

  const buttonNext = $Q('.swiper-button-next', idSlider.parentNode);
  const buttonPrev = $Q('.swiper-button-prev', idSlider.parentNode);

  buttonNext.addEventListener('click', () => {
    idSlider.swiper.slideNext();
  });

  buttonPrev.addEventListener('click', () => {
    idSlider.swiper.slidePrev();
  });
}

/**
A function that loads sliders on a page by
creating an intersection observer for each slider container element.
@returns {void}
*/
export const loadSlider = () => {
  const dataSliders = $Qll('.slider-js');

  dataSliders.forEach((slider) => {
    createInterception(slider,
      async () => {
        const loadScript = await addTagScript(slider.dataset.script);

        if (loadScript) {
          createSlider(slider);
        }
      },
    )
  })
}
