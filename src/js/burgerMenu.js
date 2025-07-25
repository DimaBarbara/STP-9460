const burger = document.querySelector('[data-burger]');
const menu = document.querySelector('[data-menu]');
const background = document.querySelector('[data-nav-bg]');
const icon = document.querySelector('[data-burger-icon]');
const menuLinks = document.querySelectorAll('[data-menu-link]');
const nav = document.querySelector('[data-nav]');

burger.addEventListener('click', () => {
  const isOpen = menu.dataset.menu === 'open';
  menu.dataset.menu = isOpen ? 'noopen' : 'open';
  background.dataset.navBg = isOpen ? 'noopen' : 'open';

  icon.setAttribute(
    'href',
    `/img/sprite.svg#${isOpen ? 'icon-burger' : 'icon-close'}`
  );
});

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    menu.dataset.menu = 'noopen';
    background.dataset.navBg = 'noopen';
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
  if (window.scrollY > 10) {
    nav.dataset.scrolled = 'true';
  } else {
    delete nav.dataset.scrolled;
  }
});
