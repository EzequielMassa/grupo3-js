let currentState = false

export const showPassword = (e) => {
	e.preventDefault()

	const button = e.target.id == 'icon' ? e.target.parentElement : e.target
	const input = button.previousElementSibling
	const icon = button.firstElementChild

	currentState = !currentState
	currentState ? (input.type = 'text') : (input.type = 'password')
	currentState
		? icon.classList.add('bi-eye-slash')
		: icon.classList.add('bi-eye')
	currentState
		? icon.classList.remove('bi-eye')
		: icon.classList.remove('bi-eye-slash')
}
