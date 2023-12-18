import { formatCurrency } from "../utils/formatCurrency.js";
import { getProductIndexById } from "../services/getProductIndexById.js";
import { getProducts } from "../services/getProducts.js";
import { setModifiedProducts } from "../services/setModifiedProduct.js";
import { renderTableBody } from "../admin.init.js";

const TableRow = (product) => {
  return `
    <tr>
    <th scope="row">${product.name}</th>
    <td>${product.id}</td>
    <td>${formatCurrency(product.price)}</td>
    <td>${product.discountPercentage ? product.discountPercentage : 0}</td>
    <td class="">${
      product.visible
        ? `<div class="form-check w-100 d-flex justify-content-center m-0 p-0">
    <input class="form-check-input" onchange="setVisibility('${product.id}')" type="checkbox" checked>
  </div>`
        : `<div class="form-check w-100 d-flex justify-content-center m-0 p-0">
  <input class="form-check-input"  onchange="setVisibility('${product.id}')" type="checkbox">
</div>`
    }
  </td>
  <td class="text-center">  <button type="button" class="btn btn-sm btn-primary me-1" data-bs-toggle="modal" data-bs-target="#edit-product-modal" ">Editar<i class="bi bi-pencil ms-1"></i></button> <button type="button" class="btn btn-sm btn-danger ms-1" data-bs-toggle="modal" data-bs-target="#delete-product-modal">Eliminar<i class="bi bi-trash ms-1"></i></button> </td>
  </tr>
    `;
};

/**
 *
 * @param {string} id Recibe el Id de un producto
 * @returns {} Modifica si el producto se renderiza en la pagina principal o no.
 */

const setVisibility = (id) => {
  const products = getProducts();
  const productIndex = getProductIndexById(id);
};

window.setVisibility = setVisibility;

export default TableRow;
