import { getUsers } from './getUsers.js'

/**
 *
 * @param {string} email Recibe un email
 * @returns Crea una key en el localStorage llamada "loggedUser" que va a almacenar el objeto del usuario logeado
 */

export const setLoggedUser = (email) => {
	const user = getUsers().find((user) => user.email == email)
	localStorage.setItem('loggedUser', JSON.stringify(user))
}
