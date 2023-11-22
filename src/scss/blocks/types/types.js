import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
//import '../slider/slider.js'

let brandList = document.querySelectorAll('.types-item');
let brandItem = null;

if (window.screen.width > 1119) {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (i > 3) {
            brandItem.classList.add('types-item--hide');
        }
    }
} else if (window.screen.width > 767) {
    for (let i = 0; i < brandList.length; i++) {
        brandItem = brandList[i];
        
        if (i > 2) {
            brandItem.classList.add('types-item--hide');
        }
    }
} else {
    const swiperTypes = new Swiper('.swiper', {
        modules: [Pagination],
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
}