import { getCartProducts } from "./getCartProducts.js";
import { cartBadgeHandler } from "../utils/cartBadgeHandler.js";
import { getProductById } from "./getProductById.js";
import { getLoggedUser } from "./getLoggedUser.js";
import { notLoggedRoute } from "../routes/notLogged.route.js";
import { setCartProducts } from "./setCartProducts.js";

/**
 * 
 * @param {string} id Recibe el ID de un producto
 * @returns En el arreglo de productos del localStorage con la key correspondiente al id del usuario, agrega el producto, de ya existir dentro del carrito, aumentar su atributo "quantity" en 1 
 */

export const addProductToCart = (id) => {

    
if (!getLoggedUser() || getLoggedUser().length == 0)
[notLoggedRoute()]

};
