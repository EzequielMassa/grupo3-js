import { getLoggedUser } from "../services/getLoggedUser.js";

/**
 * @return Si el usuario no está logeado, redirige a la página de Login
 */
export const notLoggedRoute = () => {
  const user = getLoggedUser(); 
  if (!user || !user.isLoggedIn) {
   
    window.location.href = '/views/login.html';
  }
 
};