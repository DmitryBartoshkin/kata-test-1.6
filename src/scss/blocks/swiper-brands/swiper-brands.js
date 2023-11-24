let brandList = document.querySelectorAll('.brands-item');
let brandItem = null;

if (window.screen.width > 1119) {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (i > 7) {
            brandItem.classList.add('brands-item--hide');
        }
    }
} else if (window.screen.width > 767) {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (i > 5) {
            brandItem.classList.add('brands-item--hide');
        }
    }
} else {}