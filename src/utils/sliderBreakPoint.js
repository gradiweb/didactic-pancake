// eslint-disable-next-line max-lines-per-function
export const breakPoint = (type) => {

  const objectData = {
    verticalInsideBreak: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      372: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },

    verticalOutsideBreak: {
      1024: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      372: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },

    horizontalInsideBreak: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      375: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },

    horizontalOutsideBreak: {
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      375: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  };

  return objectData[type]
}
