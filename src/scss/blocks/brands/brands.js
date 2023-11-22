import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

let brandList = document.querySelectorAll('.brand');
let brandItem = null;

if (window.screen.width > 1119) {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (i > 7) {
            brandItem.classList.add('brand--hide');
        }
    }
} else if (window.screen.width > 767) {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (i > 5) {
            brandItem.classList.add('brand--hide');
        }
    }
} else {
    const swiper = new Swiper('.swiper', {
        modules: [Pagination],
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
}