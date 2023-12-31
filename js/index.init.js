import Navbar from './components/Navbar.js'
import ProductCard from './components/ProductCard.js'
import ProductNotFoundMessage from './components/ProductNotFoundMessage.js'
import { setProducts } from './services/setProducts.js'
import { getProducts } from './services/getProducts.js'
import { createAdminUser } from './services/setAdminUser.js'
import { renderCartBody } from './cart.init.js'
import { cartBadgeHandler } from './utils/cartBadgeHandler.js'

let products

document.addEventListener('DOMContentLoaded', () => {
	Navbar()
	createAdminUser()
	setProducts()
	products = getProducts()
	// renderCartBody()
	cartBadgeHandler()
	renderProductCards(products)
})

const cardContainer = document.getElementById('cardContainer')

/**
 *
 * @param {array} products Arreglo de producto
 * @returns {} Renderiza las cards de los productos.
 */

const renderProductCards = (products) => {
	cardContainer.innerHTML = ' '
	products.map((product) => {
		const visible = product.visible === true

		if (visible) {
			cardContainer.innerHTML += ProductCard(product)
		}
	})
}

const searchInput = document.getElementById('searchInput')
let priceSelect = document.getElementById('priceSelect')
let categorySelect = document.getElementById('categorySelect')
const clearFilters = document.getElementById('clearFilters')
/**
 *
 * @param {string} value Valor del filtro de categoria
 * @param {array} productsArray Arreglo de productos a renderizar
 * @returns {array} Devuelve el arreglo de productos filtrados
 */

const filterByCategory = (value, productsArray) => {
	switch (true) {
		case value == 'mug':
			categorySelect = productsArray.filter(
				(product) => product.category == value
			)
			return categorySelect
			break
		case value == 'notepad':
			categorySelect = productsArray.filter(
				(product) => product.category == value
			)
			return categorySelect
			break
		case value == 'keychain':
			categorySelect = productsArray.filter(
				(product) => product.category == value
			)
			return categorySelect
			break
		case value == 'hat':
			categorySelect = productsArray.filter(
				(product) => product.category == value
			)
			return categorySelect
			break
		case value == 'bottle':
			categorySelect = productsArray.filter(
				(product) => product.category == value
			)
			return categorySelect
			break
		default:
			return productsArray
			break
	}
}

/**
 *
 * @param {string} value Valor del filtro de precio.
 * @param {array} productsArray Arreglo de productos a renderizar
 * @returns {array} Devuelve el arreglo de productos filtrados
 */

const filterByPrice = (value, productsArray) => {
	let comparar = function (a, b) {
		return a - b
	}

	if (value === 'asc') {
		//productsArray.price.sort(comparar)
		priceSelect = productsArray.sort((a, b) => a.price - b.price)
		return priceSelect
	}

	if (value === 'desc') {
		//productsArray.price.sort(comparar)
		priceSelect = productsArray.sort((a, b) => b.price - a.price)
		return priceSelect
	}

	if (value === 'disc') {
		priceSelect = productsArray.filter((product) => product.discountPercentage)
		priceSelect = priceSelect.sort(
			(a, b) => b.discountPercentage - a.discountPercentage
		)
		return priceSelect
	}
	if (value) {
		return priceSelect
	}

	return productsArray
}

/**
 *
 * @param {string} value valor del input de nombre
 * @returns Arreglo de productos a renderizar
 */

const searchByName = (value) => {
	let p = JSON.parse(localStorage.getItem('products'))
	let pFiltered = []
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes
	p.forEach((producto) => {
		if (producto.name.toLowerCase().includes(value)) {
			pFiltered.push(producto)
		}
	})
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes

	return pFiltered
}

searchInput.addEventListener('keyup', searchByName)

/**
 *
 * @param {string} searchInputValue Valor del input de nombre
 * @param {string} priceSelectValue Valor del select de precios
 * @param {string} categorySelectValue Valor del select de categoria
 * @returns Crea un arreglo de productos pasando por todos los filtros y llama a renderProductCards() para renderizarlas, en caso de no haber productos muestra ProductNotFoundMessage()
 */

const renderFilteredProducts = (
	searchInputValue,
	priceSelectValue,
	categorySelectValue
) => {
	let filteredProducts = searchByName(searchInputValue)
	filteredProducts = filterByCategory(categorySelectValue, filteredProducts)
	filteredProducts = filterByPrice(priceSelectValue, filteredProducts)

	if (filteredProducts.length == 0) {
		return (cardContainer.innerHTML = ProductNotFoundMessage())
	}

	renderProductCards(filteredProducts)
}

searchInput.addEventListener('keyup', (e) => {
	renderFilteredProducts(
		e.target.value.toLowerCase(),
		priceSelect.value,
		categorySelect.value
	)
})

priceSelect.addEventListener('change', (e) => {
	renderFilteredProducts(
		searchInput.value,
		e.target.value,
		categorySelect.value
	)
})

categorySelect.addEventListener('change', (e) => {
	renderFilteredProducts(
		searchInput.value,
		priceSelect.value,
		e.target.value.toLowerCase()
	)
})

clearFilters.addEventListener('click', limpiar)

function limpiar() {
	const formHomeFilterProducts = document.querySelector(
		'#formHomeFilterProducts'
	)
	formHomeFilterProducts.reset()
	renderProductCards(products)
}
