let modalFeedback = document.querySelector('.modal-feedback');
let linkOpenMobileFeedback = document.querySelector('.link-icon__icon--repair');
let linkOpenDesktopFeedback = document.querySelector('.menu-desktop__item--repair');
let linkCloseFeedback = modalFeedback.querySelector('.link-icon__icon--close');
let wrapperMain = document.querySelector('.wrapper-main');
let wrapperMenuMobile = document.querySelector('.menu-mobile');

linkOpenMobileFeedback.addEventListener('click', function() {
    modalFeedback.classList.remove('modal--hidden');
    wrapperMain.style.opacity = 0.05;
});

linkOpenDesktopFeedback.addEventListener('click', function() {
    modalFeedback.classList.remove('modal--hidden');
    wrapperMain.style.opacity = 0.05;
    wrapperMenuMobile.style.opacity = 0.05;
});

linkCloseFeedback.addEventListener('click', function() {
    modalFeedback.classList.add('modal--hidden');
    wrapperMain.style.opacity = 1;
    wrapperMenuMobile.style.opacity = 1;
});