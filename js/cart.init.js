import { ProductCardCart } from './components/CartCard.js'
import { getCartProducts } from './services/getCartProducts.js'
import { discountPrice } from './utils/discountPrice.js'
import { formatCurrency } from './utils/formatCurrency.js'

/**\
 * @returns Renderiza los productos y el precio total en el offcanvas del carrito
 */
export const renderCartBody = () => {
	renderCartProducts()
	renderCartTotalPrice()
}

const totalPrice = document.getElementById('totalPrice')

/**
 * @returns {} Renderiza la suma del precio de todos los productos en el carrito
 */

const renderCartTotalPrice = () => {
	const cartProducts = getCartProducts()
	if (cartProducts.length <= 0) {
		totalPrice.innerText = formatCurrency(0)
	}
	let total = cartProducts.reduce((total, product) => {
		if (product.discountPercentage && product.discountPercentage != 0) {
			return (
				total +
				discountPrice(product.price, product.discountPercentage) *
					product.quantity
			)
		}
		return total + product.price * product.quantity
	}, 0)
	totalPrice.innerText = formatCurrency(total)
}

/**
 * @returns {} Renderiza los productos en el carrito
 */

const renderCartProducts = () => {
	const offcanvasBody = document.querySelector('.offcanvas-body')
	const cartProducts = getCartProducts()
	offcanvasBody.innerHTML = ''
	if (cartProducts.length <= 0) {
		offcanvasBody.innerHTML += 'No tenes nada en el carrito'
		return
	}
	cartProducts.forEach(
		(product) => (offcanvasBody.innerHTML += ProductCardCart(product))
	)
}
