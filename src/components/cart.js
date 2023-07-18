import api from "../services/api";
import { $Q, $Qll } from "../utils/query-selector";
import { dataToggle, toggleDataActive } from "../utils/toggle-dataset";
import {
  updateCartItems,
  updatetotalPrice,
  updateUpsell,
  updateCartbutton,
  updatePriceItem,
  updateQuantity,
} from "./update-cart";

const CART_SECTION = "side-cart,cart-page";

/**
 * Add products in cart
 * @param {event} event -Event submit from add to cart form
 * @param {event} event -Event submit from add to cart form
 */
export const addProducts = async (event) => {

  const buttonContent = $Q(".btn-cart-js", event.target);
  const textButton = buttonContent.textContent;
  const valueCount = $Q("#quantity") ? $Q("#quantity").value : 1;
  const itemId = $Q("input[name='id']", event.target).value;

  addSpinner(".btn-cart-js", event.target);
  const cartParams = {
    items: [
      {
        id: itemId,
        quantity: valueCount,
      },
    ],
    sections: CART_SECTION,
  };

  const { sections, status } = await api.addToCart(cartParams);

  if (status === 422) {
    cartOutStockAlert();
    buttonContent.textContent = textButton;
    return;
  }
  if (!sections) return null;

  buttonContent.textContent = textButton;
  if (event.target.dataset.form !== "upsell") {
    dataToggle($Q("#shopify-section-side-cart"), true);
  }
  updateCartItems(sections["side-cart"]);
  updateCartbutton(sections["side-cart"]);
  updatetotalPrice(sections["side-cart"]);
  updateUpsell(sections["side-cart"]);
}

const cartOutStockAlert = () => {
  const message = $Q("#error-out-stock");
  message.classList.remove("hidden");
  setTimeout(() => {
    message.classList.add("hidden");
  }, 3000);
}

export const submitForm = (form) => {
  form.addEventListener(
    "submit",
    (e) => {
      e.preventDefault();
      addProducts(e);
    },
  )
}

/**
 * Listen if add to cart form is submited
 * if add to cart form is submited add products in cart
 *
 * if you want to add the event to a single repeated element,
 * you can use only the form selector for example.
 * but if you have several events on the same page
 * that load at different times, you can pass the parent of
 * the element so that it only loads that event and
 * not the ones that are loaded.
 * @param {string} formQuery - className reference in form add-to-cart
 *
 * To active this feature - ADD className 'add-cart-js' in form product
 * */
export const btnAddToCart = (formQuery, parent = null) => {
  const addForms = $Qll(formQuery, parent);

  if (addForms != null) {
    addForms.forEach(
      (form) => {
        submitForm(form);
      },
    )
  }
}

/**
 * Replace en element with a spinner
 * @param {String} element
 */
 const addSpinner = (element, parent) => {
  $Q(element, parent).innerHTML = '<div class="loading"></div>';
}

/**
 * Update quantity for each item in cart
 * @param {number} id Product ID
 * @param {number} quantity new quantity
 */
export const updateCart = async (line, quantity, id) => {
  const priceBefore = $Q(`#price-${id}`).textContent;
  addSpinner(`#price-${id}`);

  const cartParams = {
    line,
    quantity,
    sections: CART_SECTION,
  }

  const { sections, status } = await api.changeCart(cartParams);

  if (status === 422) {
    $Q(`#price-${id}`).textContent = priceBefore;
    updateQuantity(id, quantity - 1);
    cartOutStockAlert();
    return;
  }

  if (!sections) return null;

  if (Number(quantity) === 0) {
    updateCartItems(sections["side-cart"]);
    updateCartbutton(sections["side-cart"]);
    updatetotalPrice(sections["side-cart"]);
    updateUpsell(sections["side-cart"]);
  } else {
    updatePriceItem(sections["side-cart"], id);
    updateCartbutton(sections["side-cart"]);
    updatetotalPrice(sections["side-cart"]);
  }
}

/**
 * Event onChange in the cart item
 */
export const onChangeItemCart = () => {
  $Qll('.item-cart-js').forEach(
    (input) => {
      input.addEventListener(
        'change',
        function () {
          updateCart(this.dataset.index, this.value, this.id);
        },
      )
    },
  )
}

/**
 * Delete item in cart
 * listen if delete button is clicked
 * if is clicked, update cart with quantity 0
 */
export const deleteItem = () => {
  const deleteIcon = $Qll(".item-delete");

  if (deleteIcon) {
    deleteIcon.forEach(
      (element) => {
        const { dataset: { id, index } } = element;
        element.addEventListener(
          "click",
          () => {
            updateCart(index, 0, `${id}-${index}`)
          },
        )
      },
    );
  }
}

/**
* Open and close side cart with various buttons
*/
export const openCloseCart = () => {
  const cartContainer = $Q(".cart");
  cartContainer.setAttribute("data-active", "false");

  toggleDataActive(
    ".button-cart-js",
    "#shopify-section-side-cart",
    {
      overlay: true,
      closeSelector: ".cart-close",
    },
  )

}
