import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('.accordion-container', {
    duration: 300,
    showMultiple: false,
    openOnInit: [],
    elementClass: 'ac',
    triggerClass: 'ac-trigger',
    panelClass: 'ac-panel',
    activeClass: 'is-active',
  });
});
