import { renderCartBody } from '../cart.init.js'
import { getLoggedUser } from '../services/getLoggedUser.js'
import { logout } from '../utils/logout.js'
const header = document.querySelector('header')

const Navbar = () => {
	const loggedUser = getLoggedUser()

	const renderCartButton = window.location.pathname == '/index.html'

	return (header.innerHTML = `
 <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="./index.html"><img src="/grupo3-js/assets/img/logo.png" class="img-fluid w-25"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
        </li>
      
        <li class="nav-item">
        <a class="nav-link" href="https://rollingcode.co/#RollingCodeLabs" target="_blank">Labs</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="https://rollingcode.co/#RollingCodeStudio" target="_blank">Studio</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="https://rollingcode.co/#RollingCodeSchool" target="_blank">School</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="./views/404.html">Sobre nosotros</a>
  </li>
      </ul>

      <ul class="navbar-nav me-5 mb-2 mb-lg-0">
      ${
				loggedUser
					? ''
					: `<li class="nav-item">
      <a class="nav-link" href="./views/login.html">Ingresar <i class="bi bi-box-arrow-in-right"></i></a>
    </li>`
			}

    ${
			loggedUser
				? `<li class="nav-item dropdown me-5">
    <a class="nav-link dropdown-toggle fs-5"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
       ${
					loggedUser?.role == 'admin' ? 'Admin' : ''
				} <i class="bi bi-person "></i>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
      <li ><a class="dropdown-item w-100 d-flex" href="./views/404.html">Opciones <i class="bi bi-gear ms-auto"></i></a></li>
      ${
				loggedUser.role == 'admin'
					? '<li ><a class="dropdown-item w-100 d-flex" href="./views/admin.html">Panel de administrador <i class="bi bi-gear ms-2"></i></a></li>'
					: ''
			}
      <li><a id="logout" onclick="logoutHandler()" class="dropdown-item w-100 d-flex">Cerrar sesion <i class="bi bi-box-arrow-in-left ms-auto"></i></a></li>
    </ul>
    </li>`
				: ''
		}
    
   ${
			loggedUser && renderCartButton
				? `   <li class="cart-button pt-2">
       <button
         type="button"
         onclick="renderCartBodyHandler()"
         id="cart-open-button"
         class="btn position-relative p-1 rounded rounded-5"
         data-bs-toggle="offcanvas"
         data-bs-target="#cartOffcanvas"
         aria-controls="offcanvasWithBothOptions"
       >
         <i class="bi bi-cart4 nav-link p-0 px-1"></i>
         <span
           class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" id="cart-badge"
         >
           0
         </span>
       </button>
     </li>`
				: ''
		}
      </ul>
    </div>
  </div>
</nav>
 `)
}

const logoutHandler = () => {
	logout()
}

const renderCartBodyHandler = () => {
	renderCartBody()
}

window.logoutHandler = logoutHandler
window.renderCartBodyHandler = renderCartBodyHandler

export default Navbar
