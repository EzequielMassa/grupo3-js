
/**
 * 
 * @returns Devuelve el arreglo de todos los usuarios almacenados en localStorage bajo la key "users"
 */

export const getUsers = () =>{
  localStorage.getItem(JSON.parse('users'));
}