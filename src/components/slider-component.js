import { $Q, $Qll } from '../utils/query-selector';
import { createInterception } from '../utils/slider-defer';

/**
A function that adds a script tag to the document body.
@param {string} script - The source URL of the script.
@returns {void}
*/
const addTagScript = (script) => {
  if ($Q(".swiper-script")) return;

  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.src = script;
  scriptTag.setAttribute("class", "swiper-script");
  document.body.appendChild(scriptTag);
}

/**
A function that creates a slider using the Swiper library.
@param {Object} dataConfig - An object containing
  configuration data for the slider.
@param {string} dataConfig.classContainer - The CSS class selector for
  the container element of the slider.
@param {number} dataConfig.perViewMobil - The number of slides per
  view on mobile devices.
@param {number} dataConfig.perViewDesk - The number of slides per
  view on desktop devices.
@param {boolean} dataConfig.pagination - Whether to display
  pagination for the slider.
@param {boolean} dataConfig.arrows - Whether to display
  navigation arrows for the slider.
@param {boolean} dataConfig.loop - Whether to enable loop mode for the slider.
@param {number} dataConfig.speed - The delay time in milliseconds for autoplay.
@param {string} dataConfig.script - The source URL of the Swiper library script.
@param {number} dataConfig.spaceBetween - The space between slides in pixels.
@returns {void}
*/
const createSlider = (dataConfig) => {
  const PAGE_ONE = 1;
  const {
    classContainer,
    perViewMobil,
    perViewDesk,
    pagination,
    arrows,
    loop,
    speed,
    script,
    spaceBetween,
  } = dataConfig;

  addTagScript(script);

  const idSlider = $Q(classContainer);

  const swiperParams = {
    slidesPerView: perViewMobil,
    pagination: pagination,
    spaceBetween: spaceBetween,
    navigation: arrows,
    loop: loop,
    ...((speed > 0) && {
      autoplay: {
        delay: speed,
        disableOnInteraction: false,
      },
    }),
    breakpoints: {
      640: {
        slidesPerView: perViewDesk === PAGE_ONE ? perViewDesk : 2,
      },
      1024: {
        slidesPerView: perViewDesk,
      },
    },
  };

  Object.assign(idSlider, swiperParams);

  setTimeout(() => {
    idSlider.initialize();
  }, 500)
}

/**
A function that loads sliders on a page by
creating an intersection observer for each slider container element.
@returns {void}
*/
export const loadSlider = () => {
  const dataSliders = $Qll('.data-slider-js');
  dataSliders.forEach((data) => {
    const dataConfig = JSON.parse(data.dataset.config);

    createInterception($Q(dataConfig.classContainer),
      () => createSlider(dataConfig),
    );
  })
}
