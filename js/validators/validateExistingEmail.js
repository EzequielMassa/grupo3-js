/**
 * 
 * @param {email} email Recibe un email 
 * @returns {bool} Devuelve un booleano dependiendo de si el email ya esta registrado o no. 
 */

export const validateExistingEmail = (email) =>{
    const users = JSON.parse(localStorage.getItem("users")) || []
    const foundUserEmail = users.find(user => user.email == email)
    
    if (foundUserEmail) {
        return false
    }

    return true
}