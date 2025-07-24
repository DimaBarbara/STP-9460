import Swiper from 'swiper';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('[data-swiper-ul]');
  if (!swiperEl) {
    console.warn('Swiper елемент не знайдено');
    return;
  }

  new Swiper('[data-swiper-ul]', {
    modules: [Pagination, Navigation, Keyboard],
    loop: false,
    centeredSlides: false,
    pagination: {
      el: '[data-swiper-pagination]',
      clickable: true,
    },
    navigation: {
      nextEl: '[data-swiper-button-next]',
      prevEl: '[data-swiper-button-prev]',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 80,
      },
      1200: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: -50,
      },
    },
  });
});
