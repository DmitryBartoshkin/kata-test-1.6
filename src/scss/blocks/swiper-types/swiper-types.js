let typesList = document.querySelectorAll('.types-item');
let typesItem = null;

if (window.screen.width > 1119) {
  for (let i = 0; i < typesList.length; i++) {
    typesItem = typesList[i];

    if (i > 3) {
      typesItem.classList.add('types-item--hide');
    }
  }
} else if (window.screen.width > 767) {
  for (let i = 0; i < typesList.length; i++) {
    typesItem = typesList[i];

    if (i > 2) {
      typesItem.classList.add('types-item--hide');
    }
  }
} else {
}
