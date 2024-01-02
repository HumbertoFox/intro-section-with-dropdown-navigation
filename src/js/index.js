const selectHamburger = document.querySelector('.hamburger');
const selectNav = document.querySelector('.nav-header');

selectHamburger.addEventListener("click", () => selectNav.classList.toggle('active'));