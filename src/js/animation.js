document.addEventListener('DOMContentLoaded', () => {
  const zenBlocks = document.querySelectorAll('[data-zen-block]');

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
