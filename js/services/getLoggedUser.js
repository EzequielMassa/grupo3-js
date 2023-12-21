/**
 *
 * @returns Devuelve el usuario almacenado con la key "loggedUser"
 */

export const getLoggedUser = () => {
	const user = JSON.parse(localStorage.getItem('loggedUser'))
	return user ? user : null
}
