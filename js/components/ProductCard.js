import { discountPrice } from "../utils/discountPrice.js";
import { formatCurrency } from "../utils/formatCurrency.js";
import { addProductToCart } from "../services/addProductToCart.js";

const ProductCard = (product) => {
  const finalPrice = product.discountPercentage
    ? discountPrice(product.price, product.discountPercentage)
    : product.price;
  const formattedPrice = formatCurrency(finalPrice);
  const discount = product.discountPercentage ? true : false;

  return `
    <div class="col-12 col-md-6 col-lg-3 p-2">
      <div class="card bg-white border-0 rounded-0 h-100">
          <img
            src="${product.image}"
            class="card-img-top rounded-0 img-fluid"
            alt="${product.name}"
          />
          <div class="mt-auto">
          <div class="card-body text-dark">
            <h5 class="card-title">${product.name}</h5>
            <div class="d-flex w-100">
              <p class="card-text text-decoration-line-through me-3">
                ${discount ? `${formatCurrency(product.price)} <span class="badge bg-danger">-${product.discountPercentage}%</span>` : ""}
              </p>
              <p class="card-text">${formattedPrice}</p>
            </div>
             <button class="btn btn-primary rounded rounded-5" onclick="addProductToCart('${product.id}')"><i class="bi bi-cart-plus"></i> Agregar al carrito </button>
          </div>
        </div>
      </div>
    </div>
    `
};



window.addProductToCart = addProductToCart

export default ProductCard;
