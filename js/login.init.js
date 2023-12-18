import Navbar from "./components/Navbar.js";
import { validateLoginUser } from "./validators/validateLoginUser.js";
import { showPassword } from "./utils/showPassword.js";
import { setLoggedUser } from "./services/setLoggedUser.js";
import { redirectIndex } from "./utils/redirectIndex.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});

const showPasswordButton = document.getElementById("showPasswordBtn");

showPasswordButton.addEventListener("click", (e) => {
  showPassword(e);
});

const loginForm = document.getElementById("loginForm")
const invalidLoginFeedback = document.getElementById("invalidLoginFeedback")


const userLoginFeedback = (bool) =>{
  invalidLoginFeedback.classList.add("hidden")

   if (bool) {
    return  invalidLoginFeedback.classList.add("hidden")
   }

   invalidLoginFeedback.classList.remove("hidden")
   return 
}

/**
 * 
 * @param {object} e Evento de submit del formulario de login
 * @returns Debe mostrar el feedback dependiendo de la validación del login, settearlo y redirigir al usuario a la página principal si este fue correcto.
 */

const userLogin = (e) =>{
  e.preventDefault()
  
}

loginForm.addEventListener("submit", userLogin)