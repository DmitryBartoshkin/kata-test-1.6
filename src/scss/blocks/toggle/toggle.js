let brandList = document.querySelectorAll('.brands-item');
let brandItem = null;
let toggleShow = document.querySelector('.toggle--show');
let toggleHide = document.querySelector('.toggle--hide');

toggleShow.addEventListener('click', function() {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (brandItem.classList.contains('brands-item--hide')) {
            brandItem.classList.replace('brands-item--hide', 'brands-item--visible');
        }

    }
    toggleShow.hidden = true;
    toggleHide.hidden = false;
});

toggleHide.addEventListener('click', function() {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (brandItem.classList.contains('brands-item--visible')) {
            brandItem.classList.replace('brands-item--visible','brands-item--hide');
        }
    }

    toggleHide.hidden = true;
    toggleShow.hidden = false;
});