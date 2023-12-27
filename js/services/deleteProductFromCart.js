import { cartBadgeHandler } from '../utils/cartBadgeHandler.js'
import { getCartProducts } from './getCartProducts.js'
import { getLoggedUser } from './getLoggedUser.js'
import { setCartProducts } from './setCartProducts.js'

/**
 *
 * @param {*} id Recibe el id del producto a eliminar
 * @returns {} Elimina el producto del carrito
 */
export const deleteProductFromCart = (id) => {
	const userId = getLoggedUser().id
	const cartProducts = getCartProducts()
	const productFoundInCartIndex = cartProducts.findIndex(
		(product) => product.id == id
	)
	cartProducts.splice(productFoundInCartIndex, 1)
	setCartProducts(userId, cartProducts)
	cartBadgeHandler()
}
