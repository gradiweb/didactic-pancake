/**
 * Creates the interceptor for the node
 * indicated in the parameter indicated as slide
 * @param {Node} slide - element container slider
 * @param {Function} configSlider - callback init slider
 */
export const createInterception = (slide, configSlider) => {
  const options = {
    root: null,
    rootMargin: "120px",
  };

  const intersectionObserver = new
    IntersectionObserver(
      (entries, observer) => executeInterception(
        entries, observer, configSlider), options);

  intersectionObserver.observe(slide);
}

/**
 * This function detects, by means of the observer,
 * the interception with the slider,
 * to load it, and then disconnects the observer for the corresponding element.
 * @param {Node} entries - element node html, container slider
 * @param {Event} observer - observer event
 * @param {Function} configSlider - function callback start slider
 */
const executeInterception = (
  entries,
  observer,
  configSlider,
) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      configSlider();
      observer.unobserve(entry.target);
    }
})
