import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('[data-accordion]', {
    duration: 300,
    showMultiple: false,
    openOnInit: [0],
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
  });
});
