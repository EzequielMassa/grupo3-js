import { getLoggedUser } from "../services/getLoggedUser.js";
import { getCartProducts } from "../services/getCartProducts.js";

/**
 * @returns {number} Renderiza la cantidad de productos en el carrito. 
 */

export const cartBadgeHandler =()=>{
    const cartProducts = getCartProducts()

    if(cartProducts){

        const navbarCartBadge = document.getElementById("cart-badge")

        const productsInCartQuantity = cartProducts.reduce((total,product) => (total + product.quantity),0)
        navbarCartBadge.innerText = productsInCartQuantity
        return productsInCartQuantity;
    }

    return 0;
}