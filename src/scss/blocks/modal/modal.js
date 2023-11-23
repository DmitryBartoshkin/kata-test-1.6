let modal = document.querySelector('.modal');
let linkOpenMobile = document.querySelector('.link-icon__icon--repair');
let linkOpenDesktop = document.querySelector('.menu-desktop__item--repair');
let linkClose = modal.querySelector('.link-icon__icon--close');
let wrapperMain = document.querySelector('.wrapper-main');
let wrapperMenuMobile = document.querySelector('.menu-mobile');

linkOpenMobile.addEventListener('click', function() {
    modal.classList.remove('modal--hidden');
    wrapperMain.style.opacity = 0.05;
});

linkOpenDesktop.addEventListener('click', function() {
    modal.classList.remove('modal--hidden');
    wrapperMain.style.opacity = 0.05;
    wrapperMenuMobile.style.opacity = 0.05;
});

linkClose.addEventListener('click', function() {
    modal.classList.add('modal--hidden');
    wrapperMain.style.opacity = 1;
    wrapperMenuMobile.style.opacity = 1;
});