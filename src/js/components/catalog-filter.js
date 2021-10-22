const catalogGrid = document.querySelector('.grid');
const filterButtons = document.querySelectorAll('.catalog__label');

const iso = new Isotope(catalogGrid, {
  itemSelector: '.card',
  layoytMode: 'masonry',
  filter: '.makeasta, .constructor',
  visibleStyle: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  hiddenStyle: {
    opacity: 0,
    transform: 'translateY(100px)',
  },
});

filterButtons.forEach(el => {
  el.addEventListener('click', (e) => {
    let filter = e.currentTarget.dataset.filter;

    iso.arrange({filter: `${filter}, .constructor`});
  });
});