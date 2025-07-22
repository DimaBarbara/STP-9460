import Swiper from 'swiper';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiperEl = document.querySelector('.mySwiper');
  if (!swiperEl) {
    console.warn('Swiper елемент не знайдено');
    return;
  }

  new Swiper('.mySwiper', {
    modules: [Pagination, Navigation, Keyboard],
    slidesPerView: 3.5,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
  // watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
    enabled: true,
    onlyInViewport: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1200: {
        slidesPerView: 3.5,
        slidesPerGroup: 2,
      },
    },
  });
});