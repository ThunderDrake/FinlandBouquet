const radioButtons = document.querySelectorAll('.product-card__radio');
const radioLabelWrapper = document.querySelector('.product-card__size-wrapper');
const quantityButton = document.querySelectorAll('.product-card__quantity-button');
const quantityNumber = document.querySelector('.product-card__quantity-number');
const productButton = document.querySelector('.product-card__button');

let quantity = 1;

quantityButton.forEach(el => {
  el.addEventListener('click', (e) => {
    if(e.target.classList.contains('product-card__quantity-button--plus')) {
      quantityPlus();
    } else if (e.target.classList.contains('product-card__quantity-button--minus')) {
      quantityMinus();
    }
  });


});

const quantityPlus = () => {
  quantity++;
  quantityNumber.textContent = quantity;
  productButton.dataset.quantity = quantity;
};

const quantityMinus = () => {
  quantity--;
  if (quantity<1) {
    quantity = 1;
    return quantity;
  }
  quantityNumber.textContent = quantity;
  productButton.dataset.quantity = quantity;
};