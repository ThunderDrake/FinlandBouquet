const thumbSlider = new Swiper('.sub-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  watchSlidesProgress: true,
});

const productSlider = new Swiper('.main-slider', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: thumbSlider
  }
});
