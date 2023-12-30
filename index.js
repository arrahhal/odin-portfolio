const menuBtn = document.querySelector(".header__nav-btn");
const nav = document.querySelector(".header__nav--pages");
menuBtn.addEventListener("click", toggleNav);
function toggleNav() {
  nav.classList.toggle("header__nav--expanded");
}
