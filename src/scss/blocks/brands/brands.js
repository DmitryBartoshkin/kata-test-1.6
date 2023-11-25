let swiperBrandsParent = document.querySelector('.swiper-brands').parentElement;
let brandList = swiperBrandsParent.querySelectorAll('.brands-item');
let brandItem = null;
let toggleShow = swiperBrandsParent.querySelector('.toggle--show');
let toggleHide = swiperBrandsParent.querySelector('.toggle--hide');

toggleShow.addEventListener('click', function () {
  for (let i = 0; i < brandList.length; i++) {
    brandItem = brandList[i];

    if (brandItem.classList.contains('brands-item--hide')) {
      brandItem.classList.replace('brands-item--hide', 'brands-item--visible');
    }
  }
  toggleShow.hidden = true;
  toggleHide.hidden = false;
});

toggleHide.addEventListener('click', function () {
  for (let i = 0; i < brandList.length; i++) {
    brandItem = brandList[i];

    if (brandItem.classList.contains('brands-item--visible')) {
      brandItem.classList.replace('brands-item--visible', 'brands-item--hide');
    }
  }

  toggleHide.hidden = true;
  toggleShow.hidden = false;
});
