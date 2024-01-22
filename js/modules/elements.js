export const getElements = () => {
  const btnAddProduct = document.querySelector('.table-menu__button-product');
  const formOverlay = document.querySelector('.form-overflow');
  formOverlay.classList.add('form-overflow-hidden');
  const wrapFormProd = document.querySelector('.wrapper-form-product');
  const tbody = document.querySelector('.table__body');
  const table = document.querySelector('.table');
  const form = document.querySelector('.form-modal__form');
  const containerDiscount =
    document.querySelector('.form-modal__wrapper-discount');
  const discountCheckbox =
    document.querySelector('.form-modal__input-discount-ok');
  const discountText =
    document.querySelector('.form-modal__input-discount-text');
  const amountInput = document.querySelector('.form-modal__input-amount');
  const priceInput = document.querySelector('.form-modal__input-price');
  const priceNode =
    document.querySelector('.form-modal__product-bottom-text-price');

  return {
    btnAddProduct,
    formOverlay,
    wrapFormProd,
    tbody,
    table,
    form,
    containerDiscount,
    discountCheckbox,
    discountText,
    amountInput,
    priceInput,
    priceNode,
  };
};
