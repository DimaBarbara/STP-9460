const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const background = document.querySelector('#primary-nav');
const icon = document.querySelector('#burger-icon');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('menu__list--active');
  background.classList.toggle('nav--active');
  icon.setAttribute(
    'href',
    isOpen ? '../img/svg/close.svg' : '../img/svg/burger.svg'
  );
});
