const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const background = document.querySelector('#primary-nav');
const icon = document.querySelector('#burger-icon');
const menuLinks = document.querySelectorAll('.menu__link');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('menu__list--active');

  background.classList.toggle('nav--active');
  icon.setAttribute(
    'href',
    isOpen ? '../img/svg/close.svg' : '../img/svg/burger.svg'
  );
});
menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.remove('menu__list--active');
    background.classList.remove('nav--active');
    icon.setAttribute('href', '../img/svg/burger.svg');

    const href = link.getAttribute('href');
    const targetSection = document.querySelector(href);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  });
});

window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 10) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});
