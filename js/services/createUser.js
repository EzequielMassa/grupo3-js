import { User } from "../classes/user.class.js";
import { getUsers } from "./getUsers.js";
/**
 *
 * @param {string} email Recibe un email valido
 * @param {string} password Recibe una contraseña valido
 * @return Crea un nuevo usuario y lo setea en localStorage con la key "users"
 */

export const createUser = ({ email, password }) => {
  const users = getUsers()
  localStorage.setItem('users', JSON.stringify(email, password));
};
