let swiperTypesParent = document.querySelector('.swiper-types').parentElement;
let typesList = swiperTypesParent.querySelectorAll('.types-item');
let typesItem = null;
let toggleShow = swiperTypesParent.querySelector('.toggle--show');
let toggleHide = swiperTypesParent.querySelector('.toggle--hide');

toggleShow.addEventListener('click', function () {
  for (let i = 0; i < typesList.length; i++) {
    typesItem = typesList[i];

    if (typesItem.classList.contains('types-item--hide')) {
      typesItem.classList.replace('types-item--hide', 'types-item--visible');
    }
  }
  toggleShow.hidden = true;
  toggleHide.hidden = false;
});

toggleHide.addEventListener('click', function () {
  for (let i = 0; i < typesList.length; i++) {
    typesItem = typesList[i];

    if (typesItem.classList.contains('types-item--visible')) {
      typesItem.classList.replace('types-item--visible', 'types-item--hide');
    }
  }

  toggleHide.hidden = true;
  toggleShow.hidden = false;
});
