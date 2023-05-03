/**
 * Creates the interceptor for the node
 * indicated in the parameter indicated as slide
 * @param {Node} element - element container slider
 * @param {Function} callback - callback init slider
 */
export const createInterception = (element, callback) => {
  const options = {
    root: null,
    rootMargin: "0px",
  };

  const intersectionObserver = new
    IntersectionObserver(
      (entries, observer) => executeInterception(
        entries, observer, callback), options);

  intersectionObserver.observe(element);
}

/**
 * This function detects, by means of the observer,
 * the interception with the slider,
 * to load it, and then disconnects the observer for the corresponding element.
 * @param {Node} entries - element node html, container slider
 * @param {Event} observer - observer event
 * @param {Function} callback - function callback start slider
 */
const executeInterception = (
  entries,
  observer,
  callback,
) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      callback();
      observer.disconnect();
    }
})
