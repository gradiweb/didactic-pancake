import { $Q, $Qll } from '../utils/query-selector';
import { dataToggle } from '../utils/toggle-dataset';

export function resetVideo(modal) {
  const wrapper = modal;
  wrapper.innerHTML = $Q('.video__modal-wrapper', modal).outerHTML;
}

/**
 * Data Active toggle
 *
 * @param {String} control - ID button control
 * @param {String} node - ID modal
 */
export const activeVideoFrame = (control, node) => {
  $Q(control).addEventListener('click', () => {
    dataToggle($Q(node), true, true)
  });
};

(function initVideoFrame() {
  $Qll('.video__button').forEach((button) => {
    const { dataset: { section } } = button;

    activeVideoFrame(
      `#play-button-${section}-js`,
      `#modal-video-${section}-js`,
    );
  })
}())
