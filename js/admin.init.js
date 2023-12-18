import Navbar from "./components/Navbar.js";
import TableRow from "./components/TableRow.js";
import { getProducts } from "./services/getProducts.js";
import { protectedAdminRoute } from "./routes/protectedAdmin.route.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
  protectedAdminRoute();
  renderTableBody();
});

const tableBody = document.getElementById("adminTableBody");

/**
 * @returns {} Renderiza las filas de la tabla en el panel de admin.
 */

export const renderTableBody = () => {
  tableBody.innerHTML = "";
  const products = getProducts();
};
