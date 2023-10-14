'use strict';

const btnAddProduct = document.querySelector('.table-menu__button-product');
const formOverlay = document.querySelector('.form-overflow');
const wrapFormProd = document.querySelector('.wrapper-form-product');
const btnProdFormExit = document.querySelector('.button-product-form-exit');
formOverlay.classList.add('form-overflow-hidden');

btnAddProduct.addEventListener('click', () => {
  formOverlay.classList.remove('form-overflow-hidden');
})

wrapFormProd.addEventListener('click', (event) => {
  event.stopPropagation();
})

formOverlay.addEventListener('click', () => {
  formOverlay.classList.add('form-overflow-hidden');
})

btnProdFormExit.addEventListener('click', () => {
  formOverlay.classList.add('form-overflow-hidden');
})