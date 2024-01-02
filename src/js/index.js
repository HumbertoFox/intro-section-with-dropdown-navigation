const selectHamburger = document.querySelector('.hamburger');
const selectUl = document.querySelector('.ul-manu');

selectHamburger.addEventListener("click", () => selectUl.classList.toggle('active'));