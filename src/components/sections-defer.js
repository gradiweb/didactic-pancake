import { openAccordion } from "../utils/accordion";
import { $Q } from "../utils/query-selector";
import { createInterception } from "../utils/script-defer";
import { lazyVideo } from "./lazy-videos";
import { variantOnChange } from "./variants-product";
import { initVideoFrame } from "./video-frame";

export const sectionsLoadDefer = () => {

  const accordions = $Q(".accordions");
  const videoModal = $Q(".video__button");
  const variants = $Q(".variants");

  if (accordions) createInterception(accordions, () => openAccordion());
  if (videoModal) createInterception(videoModal, () => initVideoFrame());
  if (variants) createInterception(variants, () => variantOnChange(".variants"));
  lazyVideo();
}
