const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const background = document.querySelector('#primary-nav');

burger.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
  background.classList.toggle('nav--active');
});
