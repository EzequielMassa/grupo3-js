/**
 * 
 * @returns Devuelve todos los productos almacenados en localStorage
 */

export const getProducts = () =>{
    const productsJson = localStorage.getItem("products");
    const products = JSON.parse(productsJson)
    return products
}