import { emailRegex } from "./emailRegex.js";

/**
 * 
 * @param {string} email Recibe un email
 * @returns {bool} Devuelve un booleano dependiendo de si el email es valido o no. 
 */

export const validateEmail = (email) =>{
    if (!emailRegex.test(email)) {
		return false
	}
	return true
}