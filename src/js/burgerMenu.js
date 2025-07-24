const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
const background = document.querySelector('[data-nav-bg]');
const icon = document.querySelector('[data-burger-icon]');
const menuLinks = document.querySelectorAll('[data-menu-link]');

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('menu__list--active');

  background.classList.toggle('nav--active');
  icon.setAttribute(
    'href',
    isOpen ? '/img/sprite.svg#icon-close' : '/img/sprite.svg#icon-burger'
  );
});

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    menu.classList.remove('menu__list--active');
    background.classList.remove('nav--active');
    icon.setAttribute('href', '/img/sprite.svg#icon-burger');

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
  const nav = document.querySelector('[data-nav]');
  if (window.scrollY > 10) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});
