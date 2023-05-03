import { $Q } from "../utils/query-selector";
import { createInterception } from "../utils/script-defer";
import { toggleDataActive } from "../utils/toggle-dataset";
import { openDropDown } from "./header";
import { isRegisteredUser } from "./news-letters";

export const headerFooterDefer = () => {
  openDropDown();
  toggleDataActive("#burger-nav-js", "#nav-list-js");

  const formNewLetter = $Q("#NewsletterForm--footer");
  if (formNewLetter) {
    createInterception(formNewLetter, () => isRegisteredUser());
  }
}
