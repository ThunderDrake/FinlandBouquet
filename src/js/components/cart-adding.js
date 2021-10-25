if($('.product-card__cart')) {
  $('.product-card__cart').click(function(e){ /* Клик по кнопке "Добавить в корзину" */
	const butWrap = $(this).parents('.product-card__button-wrapper'); /* Запоминаем враппер кнопки */
  	butWrap.append('<div class="animtocart"></div>'); /* Добавляем во враппер кружок, который будет анимирован и улетать от кнопки в корзину */
    $('.animtocart').css({ /* Присваиваем стили кружку и позицию курсора мыши */
    	'position' : 'absolute',
      	'background' : 'var(--color-accent)',
      	'width' :  '25px',
      	'height' : '25px',
      	'border-radius' : '100px',
      	'z-index' : '9999999999',
      	'left' : e.pageX-25,
    	'top' : e.pageY-25,
    });
  const cart = $('.header__cart-circle');
	const cartOffset = $('.header__cart-circle').offset(); /* Получаем местоположение корзины на странице, чтобы туда полетел кружок */
	$('.animtocart').animate({ top: cartOffset.top + 'px', left: cartOffset.left + 'px', width: 0, height: 0 }, 800, function(){ /* Делаем анимацию полёта кружка от кнопки в корзину и по окончанию, удаляем его */
		$(this).remove();
    cart.addClass('header__cart-circle--added');
    });
});
}