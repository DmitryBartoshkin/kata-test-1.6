import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

if (window.screen.width < 768) {
  const swiper = new Swiper('.swiper', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination'
    }
  });
}
