let brandList = document.querySelectorAll('.brand');
let brandItem = null;
let toggleShow = document.querySelector('.toggle--show');
let toggleHide = document.querySelector('.toggle--hide');

toggleShow.addEventListener('click', function() {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (brandItem.classList.contains('brand--hide')) {
            brandItem.classList.replace('brand--hide', 'brand--visible');
        }

    }
    toggleShow.hidden = true;
    toggleHide.hidden = false;
});

toggleHide.addEventListener('click', function() {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (brandItem.classList.contains('brand--visible')) {
            brandItem.classList.replace('brand--visible','brand--hide');
        }
    }

    toggleHide.hidden = true;
    toggleShow.hidden = false;
});