let modalCallback = document.querySelector('.modal-callback');
let linkOpenMobileCallback = document.querySelector('.link-icon__icon--status');
let linkOpenDesktopCallback = document.querySelector('.menu-desktop__item--status');
let linkCloseCallback = modalCallback.querySelector('.link-icon__icon--close');
let wrapperMain = document.querySelector('.wrapper-main');
let wrapperMenuMobile = document.querySelector('.menu-mobile');

linkOpenMobileCallback.addEventListener('click', function() {
    modalCallback.classList.remove('modal--hidden');
    wrapperMain.style.opacity = 0.05;
});

linkOpenDesktopCallback.addEventListener('click', function() {
    modalCallback.classList.remove('modal--hidden');
    wrapperMain.style.opacity = 0.05;
    wrapperMenuMobile.style.opacity = 0.05;
});

linkCloseCallback.addEventListener('click', function() {
    modalCallback.classList.add('modal--hidden');
    wrapperMain.style.opacity = 1;
    wrapperMenuMobile.style.opacity = 1;
});