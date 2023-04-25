import { stringToHTML, $Q, $Qll } from "graditify-utils";
import { shopifySectionByUrl } from 'graditify-api';

let PAGE_COUNT = 0;

/**
 * load more content item paginate
 */
export const loadContentItems = async () => {
  const config = $Q("#data-config");
  const {
    currentPage,
    currentUrl,
    section,
    item,
    container,
    pageSize
  } = config.dataset;
  PAGE_COUNT = Number(currentPage) + 1;

  const BASE = `${currentUrl}?page=${PAGE_COUNT}#list`;
  const oldScroll = window.scrollY;

  const response = await getMoreItem(BASE, section);

  renderLinkTagPaginate(response);
  const listItems = $Qll(item, stringToHTML(response));
  config.dataset.currentPage = Number($Q("#data-config", stringToHTML(response)).dataset.currentPage);

  window.history.pushState(null, "", `?page=${PAGE_COUNT}`);

  return {
    listItems,
    oldScroll,
    container
  }
}

/**
 * update the link tag for browser information
 * @param {Element} response - section element
 */
const renderLinkTagPaginate = (response) => {
  const linkPrev = $Q("#rel-prev");
  const linkNext = $Q("#rel-next");
  linkPrev.setAttribute("href", $Q("#rel-prev", stringToHTML(response)).href);
  linkNext.setAttribute("href", $Q("#rel-next", stringToHTML(response)).href);
}

/**
 * load more items section rendering
 * @param {String} BASE - url base
 * @param {String} section - section name
 * @returns 
 */
const getMoreItem = async (BASE, section) => {
  const result = await shopifySectionByUrl(BASE, section, '&section_id');
  return result;
}

/**
 * function initials script module
 * @param {Object} options - options modules or object configurations
 */
export const initPagination = (options) => {
  if (!options) return;
  options.modules.map(module => module())
}

/**
 * Checks if the current page is the last page based on the pagination config data.
 * @return {boolean} True if the current page is the last page, otherwise false.
 */
export const isLastPage = () => {
  const config = $Q("#data-config");
  const {
    currentPage,
    pageSize
  } = config.dataset;

  return currentPage === pageSize;
}

