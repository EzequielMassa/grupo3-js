import { getLoggedUser } from "../services/getLoggedUser.js";
import { redirectIndex } from "../utils/redirectIndex.js"
/**
 * 
 * @return Si no hay usuario logeaedo, o el usuario logeado no es administrador, debe redirigir a la página principal
 */

export const protectedAdminRoute = () => {
 const logedUser = getLoggedUser()
 if (!logedUser || logedUser.role != 'admin')
 { redirectIndex() }
};
 