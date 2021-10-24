const thumbSlider = new Swiper('.sub-slider', {
  spaceBetween: 10,
  watchSlidesProgress: true,
  breakpoints: {
    620: {
      slidesPerView: 4
    }
  }
});

const productSlider = new Swiper('.main-slider', {
  slidesPerView: 1.3,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: thumbSlider
  }, 
  breakpoints: {
    620: {
      slidesPerView: 1,
    }
  }
});
