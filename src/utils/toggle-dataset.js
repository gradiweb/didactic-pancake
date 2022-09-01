import { resetVideo } from "../components/video-frame";
import { $Q } from "./query-selector"

/**
 * To validate state in dataset node
 */
export const isActive = ({ active }) => active === "true";

/**
 * Data Active toggle
 *
 * @param {String} control - ID button control
 * @param {String} node - ID modal
 * @param {Object} config - Object with overlay, closeSelector
 */
 export const toggleDataActive = (control, node, config = {}) => {
  const { overlay, closeSelector, video } = config;

  $Q(control).addEventListener("click", () => dataToggle($Q(node), overlay, video));

  if (closeSelector) {
    $Q(closeSelector).addEventListener(
      "click",
      () => dataToggle($Q(node), overlay),
    )
  }
}

/**
 *
 * @param {String} id - ID from node manipulate
 * @param {Boolean} active - If modal active
 * @param {HTMLElement} node - Node to manipulate
 */
 const overlayActions = (id, node, { active, video }) => {
  const idOverlay = `overlay--${id}`;
  const parent = node.parentNode;

  if (!active) {
    const overlay = document.createElement("div");

    overlay.setAttribute("id", idOverlay);
    overlay.classList.add("overlay");

    parent.insertBefore(overlay, node);
    toggleDataActive(`#${idOverlay}`, `#${id}`, { overlay: true, video });
  } else {
    parent.removeChild($Q(`#${idOverlay}`));

    if (video) {
      resetVideo(node);
    }
  }
}

/**
* Data Toggle
*
* @param {HTMLElement} node - Node to manipulate
* @param {Boolean} overlay - if used to a overlay
*/
export function dataToggle(node, overlay, video) {
  const { dataset, id } = node;
  const active = isActive(dataset);

  if (active) {
    dataset.active = "false";
  } else {
    dataset.active = "true";
  }

  if (overlay) {
    overlayActions(id, node, { active, video })
  }
}
