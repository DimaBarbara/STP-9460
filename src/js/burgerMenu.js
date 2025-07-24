const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
const background = document.querySelector('[data-nav-bg]');
const icon = document.querySelector('[data-burger-icon]');
const menuLinks = document.querySelectorAll('[data-menu-link]');
const nav = document.querySelector('[data-nav]');

const menuActiveClass = menu.dataset.toggleClass || 'is-active';
const bgActiveClass = background.dataset.toggleClass || 'is-active';
const navScrolledClass = nav.dataset.scrolledClass || 'nav--scrolled';

burger.addEventListener('click', () => {
  const isOpen = menu.classList.toggle(menuActiveClass);
  background.classList.toggle(bgActiveClass);

  icon.setAttribute(
    'href',
    isOpen ? '/img/sprite.svg#icon-close' : '/img/sprite.svg#icon-burger'
  );
});

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    menu.classList.remove(menuActiveClass);
    background.classList.remove(bgActiveClass);
    icon.setAttribute('href', '/img/sprite.svg#icon-burger');

    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 10 || window.scrollY < 10) {
    nav.classList.add(navScrolledClass);
  } else {
    nav.classList.remove(navScrolledClass);
  }
});
