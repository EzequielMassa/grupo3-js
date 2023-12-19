import Navbar from './components/Navbar.js'
import { redirectIndex } from './utils/redirectIndex.js'
import { showPassword } from './utils/showPassword.js'
import { validateEmail } from './validators/validateEmail.js'
import { validateRepeatPassword } from './validators/validateRepeatPassword.js'
import { validateSignUpPassword } from './validators/validateSignUpPassword.js'
import { validateExistingEmail } from './validators/validateExistingEmail.js'

document.addEventListener('DOMContentLoaded', () => {
	Navbar()
})

const showPasswordButton = document.getElementById('showPasswordBtn')

showPasswordButton.addEventListener('click', (e) => {
	showPassword(e)
})

const signUpForm = document.getElementById('signUpForm')
const signUpFormEmailInput = document.getElementById('emailSignUpInput')
const signUpFormPasswordInput = document.getElementById('emailSignUpPassword')
const signUpFormRepeatPassword = document.getElementById('repeatSignUpPassword')

signUpFormRepeatPassword.addEventListener('paste', (e) => e.preventDefault())

/**
 *
 * @param {string} email Recibe un email
 * @returns {bool} Debe mostrar el feedback de email valido o invalido segun corresponda,devuelve un booleano
 */

const emailFeedback = (email) => {
	email.classList.remove('is-valid')
	email.classList.add('is-invalid')
	return false
}

/**
 *
 * @param {string} password Recibe una contraseña.
 * @returns Debe mostrar el feedback de contraseña valida o invalida segun corresponda,devuelve un booleano.
 */

const passwordFeedback = (password) => {
	password.classList.add('is-invalid')
	return false
}

/**
 *
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword  Recibe otra contraseña
 * @returns Debe mostrar el feedback de comparación de contraseñas valida o invalida segun corresponda, devuelve un booleano.
 */

const repeatPasswordFeedback = (password, repeatPassword) => {
	repeatPassword.classList.add('is-invalid')
	return false
}

const showSuccesfulSignUpModal = () => {
	const modal = new bootstrap.Modal(
		document.getElementById('succesfulSignupModal')
	)
	modal.show()
	setTimeout(redirectIndex, 3000)
}

/**
 *
 * @param {object} e Recibe el evento de submit del formulario
 * @returns Si la información del formulario es valida, debe registrar al usuario, logearlo, mostrar el modal de registro exitoso y redirigirlo a la página principal.
 */
const signUpSubmit = (e) => {
	e.preventDefault()
	const inputEmail = signUpFormEmailInput.value.trim()
	const inputPassword = signUpFormPasswordInput.value.trim()
	const inputRepeatPassword = signUpFormRepeatPassword.value.trim()

	let formValid = {
		email: false,
		password: false,
		repeatPassword: false,
		existEmail: false,
	}
	if (!validateEmail(inputEmail) || !validateExistingEmail(inputEmail)) {
		emailFeedback(signUpFormEmailInput)
	} else {
		formValid.email = true
		formValid.existEmail = true
		signUpFormEmailInput.classList.remove('is-invalid')
		signUpFormEmailInput.classList.add('is-valid')
	}
	if (!validateSignUpPassword(inputPassword)) {
		passwordFeedback(signUpFormPasswordInput)
	} else {
		formValid.password = true
		signUpFormPasswordInput.classList.remove('is-invalid')
		signUpFormPasswordInput.classList.add('is-valid')
	}
	if (!validateRepeatPassword(inputPassword, inputRepeatPassword)) {
		repeatPasswordFeedback(signUpFormPasswordInput, signUpFormRepeatPassword)
	} else {
		formValid.repeatPassword = true
		signUpFormPasswordInput.classList.remove('is-invalid')
		signUpFormPasswordInput.classList.add('is-valid')
		signUpFormRepeatPassword.classList.remove('is-invalid')
		signUpFormRepeatPassword.classList.add('is-valid')
	}
}

signUpForm.addEventListener('submit', signUpSubmit)
