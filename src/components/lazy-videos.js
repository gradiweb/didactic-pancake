import { $Qll } from "../utils/query-selector";

const applyOrder = (videoSource) => {
  const videoSourceRef = videoSource;
  if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
    videoSourceRef.src = videoSource.dataset.src;
  }
}

/**
 * Delay video loading when inside the viewport
 */
export const lazyVideo = () => {
  const lazyVideos = [].slice.call($Qll("video.lazy"));

  if ("IntersectionObserver" in window) {
    const lazyVideoObserver = new IntersectionObserver((entries) => {
      entries.forEach((video) => {
        if (video.isIntersecting) {
          for (const source in video.target.children) {
            if (video.target.children[source]) {
              const videoSource = video.target.children[source];
              applyOrder(videoSource);
            }
          }

          video.target.load();
          video.target.classList.remove("lazy");
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach((lazyVideo) => {
      lazyVideoObserver.observe(lazyVideo);
    });
  }

}
