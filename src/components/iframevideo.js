import { $Q, $Qll } from "../utils/query-selector";
import Player from '@vimeo/player';

/**
 * Search the video class for render
 * 
 */

export function iframevimeo() {
  const videoId = $Qll('.js-iframe-media')

  videoId.forEach(element => {
    if (element) {
      videoPlayer(element);
    }
  });
}

/**
 * Render the video element and active de media controls for de video
 * 
 * @param {Node} element object that use the iframe section 
 */

function videoPlayer(element) {
  const idVideo = element.dataset.videoId;
  const width = element.dataset.width ? element.dataset.width : 946;
  const height = element.dataset.height ? element.dataset.height : 534;
  const playBtn = $Q('#play-button')
  const playBtnWrapper = $Q('.instalation-video__button')
  
  
  const player = new Player(`${element.id}`, {
    id: idVideo,
    height: height,
    width: width,
    quality: '1080p',
    controls: false
  });
  
  let videoBg = element.getAttribute('bg-src')
  if (videoBg !== false) playBtnWrapper.style.backgroundImage = "url("+videoBg+")"
  
  playBtn.addEventListener('click', () => {
    if (playBtn.dataset.method === 'play') {
      if (videoBg !== false) playBtnWrapper.style.backgroundImage = "";
      player.play();
    } else {
      player.pause();
    }
  })

  player.on('play', function () {
    playBtn.dataset.method = 'pause'
  });

  player.on('pause', function () {
    playBtn.dataset.method = 'play'
  });
}
