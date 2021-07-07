// Navbar
const menu = document.querySelector("#mobile-menu");
const body = document.querySelector("#body");
const menulinks = document.querySelector(".nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  body.classList.toggle("blur");
  menulinks.classList.toggle("active");
});