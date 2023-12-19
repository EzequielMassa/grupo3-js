/**
 *
 * @param {string} password Recibe una contraseña
 * @param {string} repeatPassword Recibe otra contraseña
 * @returns {bool} Devuelve un booleano dependiendo si las contraseñas de registro coinciden o no.
 */

export const validateRepeatPassword = (password, repeatPassword) => {
	if (password.localeCompare(repeatPassword) !== 0 || !password) {
		return false
	}
	return true
}
