import Navbar from "./components/Navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar();
});

const goBackButton = document.getElementById("goBackBtn");

goBackButton.addEventListener("click", () => {
  history.back();
});
