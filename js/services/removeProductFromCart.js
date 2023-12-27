/**
 *
 * @param {string} id Recibe el id de un producto
 * @return En el arreglo de productos del carrito reduce en 1 la cantidad del que coincida con el id recibido, 
 * si la cantidad es 1, lo elimina del arreglo.
 */

export const removeProductFromCart = (id) => {
    const cartProducts = getCartProducts();
    const productIndex = cartProducts.findIndex((product) => product.id === id);

    if (productIndex !== -1) {
        cartProducts[productIndex].quantity -= 1;

        if (cartProducts[productIndex].quantity === 0) {
            cartProducts.splice(productIndex, 1);
        }

        setCartProducts(cartProducts);
    }
    return cartProducts;
};
