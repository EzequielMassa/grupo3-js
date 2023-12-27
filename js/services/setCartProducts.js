/**
 *  
 * @param {string} id Recibe el id de un usuario
 * @param {array} products Recibe un arreglo de productos
 * @returns Los setea en localStorage con la key correspondiente al id del usuario
 */

export const setCartProducts = (id, products) => {


    const productsToSave = JSON.stringify(products);

    return localStorage.setItem(id, productsToSave);


}

