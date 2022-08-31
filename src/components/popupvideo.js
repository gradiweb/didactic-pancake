import { $Q, $Qll } from "../utils/query-selector";

import videojs from 'video.js';

import 'videojs-youtube';

import '@devmobiliza/videojs-vimeo/dist/videojs-vimeo.esm';

/**
 * Open / close video popup
 */
export function openPopUpVideo() {
  const videoSection = $Qll('.instalation-video');

  videoSection.forEach(section => {
    popUpHandler(section);
  })
}

/**
 * Handler for popup actions
 * @param {HTMLElement} element 
 */
function popUpHandler(element) {
  const playBtn  = $Q('#play-button', element);
  const popUp    = $Q('.instalation-video__popup', element);
  const overlay  = $Q('.instalation-video__overlay', element);
  const closeBtn = $Q('.instalation-video__popup--close', element);

  let player =  videojs('my-video', {
    autoplay: false,
    preload: 'auto',
    errorDisplay: false,
    textTrackSettings: false
  });

  player.controlBar.dispose();

  playBtn.addEventListener('click', () => {
    overlay.style.display = 'block'
    popUp.style.display = 'block'
    player.play()
  });

  overlay.addEventListener('click', () => {
    overlay.style.display = 'none'
    popUp.style.display = 'none'
    player.pause()
  });

  closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
    popUp.style.display = 'none'
    player.pause()
  });
}