document.addEventListener('DOMContentLoaded', () => {
  const zenBlocks = document.querySelectorAll('.zen-block, .zen-block--double');

  if (!zenBlocks.length) {
    console.warn('zen-блоки не знайдені в DOM');
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  zenBlocks.forEach(block => observer.observe(block));
});
