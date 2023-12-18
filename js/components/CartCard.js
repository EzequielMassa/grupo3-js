// import {productAddHandler, productSubtractHandler, productRemoveHandler} from "../helpers/cart/cart.js";
import { discountPrice } from "../utils/discountPrice.js";
import { formatCurrency } from "../utils/formatCurrency.js";
import { addProductToCart } from "../services/addProductToCart.js";
import { removeProductFromCart } from "../services/removeProductFromCart.js";
import { deleteProductFromCart } from "../services/deleteProductFromCart.js";
import { renderCartBody } from "../cart.init.js";

function ProductCardCart(product) {
  const totalProductPriceWithDiscount =
    discountPrice(product.price, product.discountPercentage) * product.quantity;
  const totalProductPrice = formatCurrency(product.price * product.quantity);
  let totalProductPriceFormatted = formatCurrency(
    totalProductPriceWithDiscount
  );
  const discount = product.discountPercentage ? true : false;

  return `
  <div class="card mb-3 body-bg text-light me-2">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src="${product.image}"
        class="img-fluid cart-card-img rounded-start"
        alt="${product.name}"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <div class="row">
          <div class="col-10">
            <h5 class="card-title">${product.name}</h5>
          </div>
          <div class="col-1">
            <div data-bs-theme="dark">
              <button
                type="button"
                class="btn-close"
                onclick="deleteProductHandler('${product.id}')"
                aria-label="Close"
              ></button>
            </div>
          </div>
   
       <div class="d-flex w-100">
       <p class="card-text text-decoration-line-through me-1">
         ${
           discount
             ? `${totalProductPrice} <span class="badge bg-danger">-${product.discountPercentage}%</span>`
             : ""
         }
       </p>
       <p class="card-text">${totalProductPriceFormatted}</p>
     </div>
        </div>
        <div
          class="btn-group btn-group-sm pt-auto"
          role="group"
          aria-label="Small button group"
        >
          <button
            type="button"
            class="btn btn-primary rounded-start-5"
            onclick="removeProductHandler('${product.id}')"
          >
            -
          </button>
          <button type="button" class="btn btn-primary">${
            product.quantity
          }</button>
          <button
            type="button"
            class="btn btn-primary rounded-end-5"
            onclick="addProductHandler('${product.id}')"
          >
            +
          </button>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

const removeProductHandler = (id) => {
  removeProductFromCart(id);
  renderCartBody();
};

const addProductHandler = (id) => {
  addProductToCart(id);
  renderCartBody();
};

const deleteProductHandler = (id) => {
  deleteProductFromCart(id);
  renderCartBody();
};

window.addProductHandler = addProductHandler;
window.removeProductHandler = removeProductHandler;
window.deleteProductHandler = deleteProductHandler;

export { ProductCardCart };
