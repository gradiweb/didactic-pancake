export const createInterception = (slide, configSlider) => {
  console.log("prepara interceptor", slide);
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
      console.log("ejecuta confi slider, hay interception");
      const { id } = entry.target;
      configSlider(`#${id}`);
      console.log("desconecta interception");

      observer.disconnect();
    }
})
