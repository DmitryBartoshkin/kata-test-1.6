let windowWidth = window.screen.width;

if (windowWidth > 1440) {
  let mainContent = document.querySelector('.wrapper-main');
  let menuMobile = document.querySelector('.menu-mobile');
  let mainWidth = mainContent.offsetWidth;
  let leftMargin = (windowWidth - mainWidth) / 2;

  menuMobile.style.left = leftMargin + 'px';
}
