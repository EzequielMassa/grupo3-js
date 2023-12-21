/**
 *
 * @param {array} products Recibe un arreglo de productos
 * @returns Los setea en localStorage con la key "products"
 */

export const setModifiedProducts = (products) => {
	localStorage.setItem('products', JSON.stringify(products))
}
