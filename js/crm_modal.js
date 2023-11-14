'use strict';


  const form = document.querySelector('.form-modal__form');
  const containerDiscount = document.querySelector('.form-modal__wrapper-discount');
  const discountCheckbox = document.querySelector('.form-modal__input-discount-ok');
  const discountText = document.querySelector('.form-modal__input-discount-text');




containerDiscount.addEventListener('click', (e) => {
  const target = e.target;

  if (target === discountCheckbox) {
    discountCheckbox.classList.toggle('discount-ok-img');

    if (!!~discountCheckbox.getAttribute('class').indexOf('discount-ok-img')) {
      discountText.removeAttribute('disabled');
    } else {
      discountText.value = '';
      discountText.setAttribute('disabled', 'disabled');
    }
  }
});

// const form = document.querySelector('.form-modal__form');



// Расчет стоимости формы
const getResultPrice = (amount, price) => {
  const resultPrice = amount * price;
  return resultPrice;
};

{
  const amountInput = document.querySelector('.form-modal__input-amount');
  const priceInput = document.querySelector('.form-modal__input-price');
  const priceNode = document.querySelector('.form-modal__product-bottom-text-price');
  let amountInputValue;
  let priceInputValue;

  const getPriceSimbol = (num) => {
    const price = '$ ' + num;

    return price;
  };

  const arrForResultPrice = [];

    amountInput.addEventListener('blur', (e) => {
      amountInputValue = form.amount.value;
      arrForResultPrice.push(amountInputValue);

      if (arrForResultPrice.length === 2) {
        let resultPrice = 1;
        for (const elem of arrForResultPrice) {
          resultPrice *= elem;
        }
        priceNode.textContent = getPriceSimbol(resultPrice); 
        console.log(resultPrice);
      }
    });

    priceInput.addEventListener('blur', (e) => {
      priceInputValue = form.price.value;
      arrForResultPrice.push(priceInputValue);

      if (arrForResultPrice.length === 2) {
        let resultPrice = 1;
        for (const elem of arrForResultPrice) {
          resultPrice *= elem;
        }
        priceNode.textContent = getPriceSimbol(resultPrice);
        console.log(resultPrice);
      }
    });
};


{
  // Работа с формой 
  

  const formControl = (form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    
      const formData = new FormData(e.target);
      const newProduct = Object.fromEntries(formData);    
      // console.log(newProduct);
      // console.log([...formData.entries()]);
    
      form.reset();
      formOverlay.classList.add('form-overflow-hidden');
    });
  };

  const init = () => {
    formControl(form);
  };


  window.START = init;
};
