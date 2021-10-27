"use strict";
"use strict";

if ($('.product-card__cart')) {
  $('.product-card__cart').click(function (e) {
    /* Клик по кнопке "Добавить в корзину" */
    var butWrap = $(this).parents('.product-card__button-wrapper');
    /* Запоминаем враппер кнопки */

    butWrap.append('<div class="animtocart"></div>');
    /* Добавляем во враппер кружок, который будет анимирован и улетать от кнопки в корзину */

    $('.animtocart').css({
      /* Присваиваем стили кружку и позицию курсора мыши */
      'position': 'absolute',
      'background': 'var(--color-accent)',
      'width': '25px',
      'height': '25px',
      'border-radius': '100px',
      'z-index': '9999999999',
      'left': e.pageX - 25,
      'top': e.pageY - 25
    });
    var cart = $('.header__cart-circle');
    var cartOffset = $('.header__cart-circle').offset();
    /* Получаем местоположение корзины на странице, чтобы туда полетел кружок */

    $('.animtocart').animate({
      top: cartOffset.top + 'px',
      left: cartOffset.left + 'px',
      width: 0,
      height: 0
    }, 800, function () {
      /* Делаем анимацию полёта кружка от кнопки в корзину и по окончанию, удаляем его */
      $(this).remove();
      cart.addClass('header__cart-circle--added');
    });
  });
}
"use strict";

var catalogGrid = document.querySelector(".grid");
var filterButtons = document.querySelectorAll(".catalog__label");

if (catalogGrid) {
  var iso = new Isotope(catalogGrid, {
    itemSelector: ".card",
    layoytMode: "masonry",
    filter: ".makeasta, .constructor",
    visibleStyle: {
      opacity: 1,
      transform: "translateY(0)"
    },
    hiddenStyle: {
      opacity: 0,
      transform: "translateY(100px)"
    }
  });
  filterButtons.forEach(function (el) {
    el.addEventListener("click", function (e) {
      var filter = e.currentTarget.dataset.filter;
      iso.arrange({
        filter: "".concat(filter, ", .constructor")
      });
    });
  });
  filterButtons.forEach(function (el) {
    el.addEventListener('click', function (e) {
      buttonClassRemove();
      e.target.classList.add('catalog__label--active');
    });
  });
}

function buttonClassRemove() {
  filterButtons.forEach(function (el) {
    el.classList.remove('catalog__label--active');
  });
}
"use strict";

var inputsTel = document.querySelectorAll('input[type="tel"]');
var form = document.querySelector('.form-section__form');

if (form) {
  var im = new Inputmask({
    "mask": '+7 (999) 999-99-99',
    removeMaskOnSubmit: true
  });
  im.mask(inputsTel); // validation

  var validationForm = function validationForm(selector, rules, messages) {
    new window.JustValidate(selector, {
      rules: rules,
      messages: messages,
      submitHandler: function submitHandler(form, values, ajax) {
        console.log(values);
      }
    });
  };

  validationForm('.form-section__form', {
    name: {
      required: true
    },
    phone: {
      required: true,
      minLength: 10
    }
  }, {
    name: {
      required: 'Как вас зовут?'
    },
    phone: {
      required: 'Укажите номер для связи',
      minLength: 'Укажите номер формата +7 (999) 999-99-99'
    }
  });
}
"use strict";

var burger = document.querySelector('.burger');
var menu = document.querySelector('.header__menu');
burger.addEventListener('click', function (e) {
  e.currentTarget.classList.toggle('burger--active');
  menu.classList.toggle('header__menu--active');
  document.body.classList.toggle('no-scrolling');
});
"use strict";

var swiper = new Swiper('.instagram-section__slider', {
  navigation: {
    nextEl: '.instagram-section__slider-button--next',
    prevEl: '.instagram-section__slider-button--prev'
  }
});
"use strict";

var selector = document.querySelectorAll('.product-cars__size-selector');
selector.forEach(function (el) {
  var selectorModified = new Choices(el, {
    searchEnabled: false
  });
});
"use strict";

var thumbSlider = new Swiper('.sub-slider', {
  spaceBetween: 10,
  watchSlidesProgress: true,
  breakpoints: {
    620: {
      slidesPerView: 4
    }
  }
});
var productSlider = new Swiper('.main-slider', {
  slidesPerView: 1.3,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  thumbs: {
    swiper: thumbSlider
  },
  breakpoints: {
    620: {
      slidesPerView: 1
    }
  }
});
"use strict";

var radioButtons = document.querySelectorAll('.product-card__radio');
var radioLabelWrapper = document.querySelector('.product-card__size-wrapper');
var quantityButton = document.querySelectorAll('.product-card__quantity-button');
var quantityNumber = document.querySelector('.product-card__quantity-number');
var productButton = document.querySelector('.product-card__button');
var quantity = 1;
quantityButton.forEach(function (el) {
  el.addEventListener('click', function (e) {
    if (e.target.classList.contains('product-card__quantity-button--plus')) {
      quantityPlus();
    } else if (e.target.classList.contains('product-card__quantity-button--minus')) {
      quantityMinus();
    }
  });
});

var quantityPlus = function quantityPlus() {
  quantity++;
  quantityNumber.textContent = quantity;
  productButton.dataset.quantity = quantity;
};

var quantityMinus = function quantityMinus() {
  quantity--;

  if (quantity < 1) {
    quantity = 1;
    return quantity;
  }

  quantityNumber.textContent = quantity;
  productButton.dataset.quantity = quantity;
};
"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var accordions = document.querySelectorAll('.accordion');
  accordions.forEach(function (el) {
    el.addEventListener('click', function (e) {
      var self = e.currentTarget;
      var control = self.querySelector('.accordion__control');
      var content = self.querySelector('.accordion__content');
      self.classList.toggle('open'); // если открыт аккордеон

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
        content.style.maxHeight = null;
      }
    });
  });
});
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
