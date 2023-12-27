/**
 *
 * @param {string} id Recibe el id de un producto
 * @return En el arreglo de productos del carrito reduce en 1 la cantidad del que coincida con el id recibido, 
 * si la cantidad es 1, lo elimina del arreglo.
 */
import { getCartProducts } from "./getCartProducts.js";
import { setCartProducts } from "./setCartProducts.js";
import {renderCartBody} from "../cart.init.js";
import { getLoggedUser } from "./getLoggedUser.js";
import { cartBadgeHandler } from "../utils/cartBadgeHandler.js";

export const removeProductFromCart = (id) => {

    const userId = getLoggedUser().id
    const cartProducts = getCartProducts();
    const productInCart = cartProducts.find((p) => p.id == id)
    const productInCartQuantity = productInCart.quantity

    const productIndex = cartProducts.findIndex((p) => p.id == id);

    if (productInCartQuantity == 1){
        cartProducts.splice(productIndex,1)
        setCartProducts(userId,cartProducts)
        cartBadgeHandler()
        return;
    }

    productInCart.quantity -- 
    cartProducts[productIndex] = productInCart
    setCartProducts(userId,cartProducts)

    renderCartBody()
    cartBadgeHandler()
};