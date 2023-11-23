import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

if (window.screen.width < 768) {
    const swiperPrices = new Swiper('.swiper', {
        modules: [Pagination],
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
}