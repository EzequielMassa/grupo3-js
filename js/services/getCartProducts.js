import { getLoggedUser } from './getLoggedUser.js'

/**
 *
 * @returns Devuelve todos los elementos del carrito del usuario
 */

export const getCartProducts = () => {
	const user = getLoggedUser()
	if (!user) {
		return
	}
	const userCartProducts = JSON.parse(localStorage.getItem(user.id))
	return userCartProducts ? userCartProducts : []
}
