import { $Q, $Qll } from '../utils/query-selector';
import { createInterception } from '../utils/slider-defer';
export const initialComponentSlider = () => {

  loadSlider();
}

const addTagScript = (script) => {
  if ($Q(".swiper-script")) return;

  const scriptTag = document.createElement('script');
  scriptTag.type = 'text/javascript';
  scriptTag.src = script;
  scriptTag.setAttribute("class", "swiper-script");
  document.body.appendChild(scriptTag);
}
const createSlider = (dataConfig) => {
  const {
    idSection,
    classContainer,
    perViewMobil,
    perViewDesk,
    pagination,
    arrows,
    loop,
    speed,
    script,
  } = dataConfig;

  addTagScript(script);

  const idSlider = $Q(classContainer);

  const swiperParams = {
    slidesPerView: perViewMobil,
    pagination: pagination,
    spaceBetween: 25,
    navigation: arrows,
    loop: loop,
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: perViewDesk,
      },
    },
    on: {
      init: function () {
      console.log('');
    },
    },
  };

  Object.assign(idSlider, swiperParams);

  setTimeout(() => {
    idSlider.initialize();
  }, 500)
  console.log("inicializa slider, ", classContainer);
}

const loadSlider = () => {

  const dataSliders = $Qll('.data-slider-js');
  dataSliders.forEach((data) => {
    const dataConfig = JSON.parse(data.dataset.config);

    createInterception($Q(dataConfig.classContainer),
      () => createSlider(dataConfig),
    );
  })
}
