import './js/burgerMenu';
import './js/accordion';
import './js/animation';
import './js/swiper';
import './js/cookies';
import './js/testimonials-swiper';


window.addEventListener('scroll', () => {
  const scrollBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

document.getElementById('scrollToTopBtn').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});