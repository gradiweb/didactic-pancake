import { $Q, $Qll } 
    from "../utils/query-selector"

import videojs 
    from 'video.js'

import 'videojs-youtube'

import '@devmobiliza/videojs-vimeo/dist/videojs-vimeo.esm'

export function openPopUpVideo() {
    const videoSection = $Qll('.instalation-video')
    
    videoSection.forEach(section => {
        popUpHandler(section)
    })
}

function popUpHandler(element) {

    const playBtn  = element.querySelector('#play-button')
    const popUp    = element.querySelector('.instalation-video__popup')
    const overlay  = element.querySelector('.instalation-video__overlay')
    const closeBtn = element.querySelector('.instalation-video__popup--close')

    let player =  videojs('my-video', {
        autoplay: false,
        preload: 'auto',
        errorDisplay: false,
        textTrackSettings: false
    });

    player.controlBar.dispose()

    playBtn.addEventListener('click', () => {
        overlay.style.display = 'block'
        popUp.style.display = 'block'
        player.play()
    })

    overlay.addEventListener('click', () => {
        overlay.style.display = 'none'
        popUp.style.display = 'none'
        player.pause()
    })

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none'
        popUp.style.display = 'none'
        player.pause()
    })
}