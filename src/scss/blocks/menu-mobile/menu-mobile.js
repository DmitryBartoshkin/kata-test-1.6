let menuMobile = document.querySelector('.menu-mobile');
let linkOpen = document.querySelector('.link-icon__icon--hamburger');
let linkClose = document.querySelector('.link-icon__icon--close');
let wrapperMain = document.querySelector('.wrapper-main');

linkOpen.addEventListener('click', function() {
    menuMobile.classList.remove('menu-mobile--hidden');
    wrapperMain.style.opacity = 0.05;
});

linkClose.addEventListener('click', function() {
    menuMobile.classList.add('menu-mobile--hidden');
    wrapperMain.style.opacity = 1;
});


wrapperMain.addEventListener('click', function(e) {
    if( !menuMobile.contains(e.target) &&
        !document.querySelector('.page-header__link-icon--hamburger').contains(e.target) &&
        !menuMobile.classList.contains('menu-mobile--hidden')
      ) {
        menuMobile.classList.add('menu-mobile--hidden');
        wrapperMain.style.opacity = 1;
    }
});