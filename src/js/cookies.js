document.addEventListener('DOMContentLoaded', () => {
  const cookiesBanner = document.querySelector('[data-cookies]');
  const acceptBtn = document.querySelector('[data-cookies-accept]');
  const declineBtn = document.querySelector('[data-cookies-decline]');

  const userCookieChoice = localStorage.getItem('cookiesAccepted');

  if (!userCookieChoice) {
    cookiesBanner.style.position = 'fixed';
    cookiesBanner.style.bottom = '-70px';
    cookiesBanner.style.zIndex = '999';
    cookiesBanner.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    cookiesBanner.style.opacity = '1';
  } else {
    cookiesBanner.style.display = 'none';
  }

  const handleChoice = value => {
    localStorage.setItem('cookiesAccepted', value);
    cookiesBanner.style.opacity = '0';
    cookiesBanner.style.transform = 'translateY(100%)';
    setTimeout(() => {
      cookiesBanner.style.display = 'none';
    }, 300);
  };

  acceptBtn.addEventListener('click', () => handleChoice('true'));
  declineBtn.addEventListener('click', () => handleChoice('false'));
});
