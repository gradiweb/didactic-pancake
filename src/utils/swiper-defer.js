export const createInterception = (slide, configSlider) => {
  const options = {
    root: null,
    rootMargin: "0px",
  };

  const intersectionObserver = new
    IntersectionObserver(
      (entries, observer) => executeInterception(
        entries, observer, configSlider), options);

  intersectionObserver.observe(slide);

}

const executeInterception = (
  entries,
  observer,
  configSlider,
) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const { id } = entry.target;
      configSlider(`#${id}`);

      observer.disconnect();
    }
})
