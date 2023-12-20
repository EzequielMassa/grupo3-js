import Navbar from './components/Navbar.js'
import { setLoggedUser } from './services/setLoggedUser.js'
import { redirectIndex } from './utils/redirectIndex.js'
import { showPassword } from './utils/showPassword.js'
import { validateLoginUser } from './validators/validateLoginUser.js'

document.addEventListener('DOMContentLoaded', () => {
	Navbar()
})

const showPasswordButton = document.getElementById('showPasswordBtn')

showPasswordButton.addEventListener('click', (e) => {
	showPassword(e)
})

const loginForm = document.getElementById('loginForm')
const invalidLoginFeedback = document.getElementById('invalidLoginFeedback')

const userLoginFeedback = (bool) => {
	invalidLoginFeedback.classList.add('hidden')

	if (bool) {
		return invalidLoginFeedback.classList.add('hidden')
	}

	invalidLoginFeedback.classList.remove('hidden')
	return
}

/**
 *
 * @param {object} e Evento de submit del formulario de login
 * @returns Debe mostrar el feedback dependiendo de la validación del login, settearlo y redirigir al usuario a la página principal si este fue correcto.
 */

const userLogin = (e) => {
	e.preventDefault()
	const loginEmailInput = document.getElementById('loginEmailInput')
	const loginPasswordInput = document.getElementById('loginInputPassword')
	const email = loginEmailInput.value.trim()
	const password = loginPasswordInput.value.trim()
	const isLogin = validateLoginUser({
		email: email,
		password: password,
	})
	userLoginFeedback(isLogin)
	if (!isLogin) {
		return
	}
	setLoggedUser(email)
	redirectIndex()
}

loginForm.addEventListener('submit', userLogin)
