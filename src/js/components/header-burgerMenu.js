const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu');

burger.addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('burger--active');
  menu.classList.toggle('header__menu--active');
  document.body.classList.toggle('no-scrolling');
});