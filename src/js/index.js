const selectMain = document.querySelector('.main');
const selectHamburger = document.querySelector('.menu-hamburger');
const selectNav = document.querySelector('.nav-header');
const selectLiFeatures = document.getElementById('li-features');
const selectLiCompany = document.getElementById('li-company');
const ulFeatures = `<ul class="ul-features">
                        <li><img class="img-li-features" src="./src/assets/images/icon-todo.svg" alt="icon todo"/>Todo List</li>
                        <li><img class="img-li-features" src="./src/assets/images/icon-calendar.svg" alt="icon calendar"/>Calendar</li>
                        <li><img class="img-li-features" src="./src/assets/images/icon-reminders.svg" alt="icon reminders"/>Reminders</li>
                        <li><img class="img-li-features" src="./src/assets/images/icon-planning.svg" alt="icon planning"/>Planning</li>
                    </ul>`;
const ulCompany = `<ul class="ul-company">
                        <li><img class="" src=""/>History</li>
                        <li><img class="" src=""/>Our Team</li>
                        <li><img class="" src=""/>Blog</li>
                   </ul>`;
const divOverlay = `<div class="overlay"></div>`;

selectLiFeatures.innerHTML += ulFeatures;
selectLiCompany.innerHTML += ulCompany;
selectMain.insertAdjacentHTML("afterbegin", divOverlay);

const selectUlFeature = document.querySelector('.ul-features');
const selectUlCompany = document.querySelector('.ul-company');
const selectDivOverlay = document.querySelector('.overlay');

selectLiFeatures.addEventListener("click", () => {
    selectUlFeature.classList.toggle('active');
    selectLiFeatures.classList.toggle('active');
});

selectLiCompany.addEventListener("click", () => {
    selectUlCompany.classList.toggle('active');
    selectLiCompany.classList.toggle('active');
});

selectHamburger.addEventListener("click", () => {
    selectNav.classList.toggle('active');
    selectHamburger.classList.toggle('active');
    selectDivOverlay.classList.toggle('active');

    if (selectHamburger.classList.value.includes('active')) {
        selectHamburger.setAttribute('src', './src/assets/images/icon-close-menu.svg');
    } else {
        selectHamburger.setAttribute('src', './src/assets/images/icon-menu.svg');
    };
});