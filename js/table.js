import {objProduct} from './modules/data.js';
import {getElements} from './modules/elements.js';

const addNewContact = (newProduct) => {
  objProduct.push(newProduct);
};

const modalControl = () => {
  const {btnAddProduct, formOverlay} = getElements();

  const modalOpen = () => {
    formOverlay.classList.remove('form-overflow-hidden');
  };

  const modalClose = () => {
    formOverlay.classList.add('form-overflow-hidden');
  };

  btnAddProduct.addEventListener('click', () => {
    modalOpen();
  });

  formOverlay.addEventListener('click', (e) => {
    const target = e.target;

    if (target === formOverlay ||
      target.closest('.button-product-form-exit')) {
      modalClose();
    }
  });
};

const getBtnGroup = (params) => {
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  const btns = params.map(({type, className}) => {
    const btn = document.createElement('button');
    btn.type = type;
    btn.className = className;

    return btn;
  });

  btnContainer.append(...btns);

  return {
    btnContainer,
    btns,
  };
};

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRow = ({
  productName,
  productCategory,
  units,
  amount,
  price,
  totalPrice}) => {
  const tr = document.createElement('tr');
  tr.classList.add('table__body-row');

  const tdID = document.createElement('td');
  tdID.classList.add('table__body-cell',
      'table__body-cell-id', 'table__body-cell_padding_left');
  tdID.setAttribute('contenteditable', 'true');
  tdID.textContent = getRandomIntInclusive(1000000, 9999999);

  const tdProductName = document.createElement('td');
  tdProductName.classList.add('table__body-cell');
  tdProductName.textContent = productName;

  const tdProductCategory = document.createElement('td');
  tdProductCategory.classList.add('table__body-cell');
  tdProductCategory.textContent = productCategory;

  const tdUnits = document.createElement('td');
  tdUnits.classList.add('table__body-cell', 'table__body-cell_color_gris');
  tdUnits.textContent = units;

  const tdAmount = document.createElement('td');
  tdAmount.classList.add('table__body-cell');
  tdAmount.textContent = amount;

  const tdPrice = document.createElement('td');
  tdPrice.classList.add('table__body-cell');
  tdPrice.textContent = price;

  const tdTotalPrice = document.createElement('td');
  tdTotalPrice.classList
      .add('table__body-cell', 'table__body-cell-total-price');
  tdTotalPrice.textContent = totalPrice;

  const btnGroup = getBtnGroup([
    {
      type: 'button',
      className: 'btn btn-img',
    },
    {
      type: 'button',
      className: 'btn btn-edit',
    },
    {
      type: 'button',
      className: 'btn btn-del',
    },
  ]);

  const tdBtns = document.createElement('td');
  tdBtns.classList.add('table__body-cell', 'table__body-cell_padding_right');

  tdBtns.append(btnGroup.btnContainer);

  tr.append(
      tdID,
      tdProductName,
      tdProductCategory,
      tdUnits,
      tdAmount,
      tdPrice,
      tdTotalPrice,
      tdBtns);

  return tr;
};

const appendTbodyRows = (objProduct) => {
  const {tbody} = getElements();

  objProduct.forEach(elem => {
    tbody.append(getRow(elem));
  });
};

const delRowControl = () => {
  const {table} = getElements();

  table.addEventListener('click', (e) => {
    const target = e.target;

    if (target.closest('.btn-del')) {
      target.closest('.table__body-row').remove();
    }
  });
};

const checkboxControl = () => {
  const {
    containerDiscount,
    discountCheckbox,
    discountText,
  } = getElements();

  containerDiscount.addEventListener('click', (e) => {
    const target = e.target;

    if (target === discountCheckbox) {
      discountCheckbox.classList.toggle('discount-ok-img');

      if (discountCheckbox.closest('.discount-ok-img')) {
        discountText.removeAttribute('disabled');
        discountText.focus();
      } else {
        discountText.value = '';
        discountText.setAttribute('disabled', 'disabled');
      }
    }
  });
};

const getPriceSimbol = (num) => {
  const price = '$ ' + num;
  return price;
};

const priceFormControl = () => {
  const {
    amountInput,
    priceInput,
    priceNode,
    form,
  } = getElements();

  let amountValue;
  let priceValue;

  let resultPrice = 0;
  priceNode.textContent = getPriceSimbol(0);

  const arrPrice = [];

  const renderPrice = (num, arrElem = 0) => {
    if (Number.isFinite(arrPrice[arrElem])) {
      arrPrice[arrElem] = num;
    }
    arrPrice[arrElem] = num;

    if (arrPrice.length === 2) {
      resultPrice = 1;
      for (const elem of arrPrice) {
        resultPrice *= elem;
      }
    }

    return resultPrice;
  };

  amountInput.addEventListener('input', (e) => {
    amountValue = form.amount.value;
    priceNode.textContent = getPriceSimbol(renderPrice(amountValue));
  });

  priceInput.addEventListener('input', (e) => {
    priceValue = form.price.value;
    priceNode.textContent = getPriceSimbol(renderPrice(priceValue, 1));
  });
};

const addContactPage = (tbody, newProduct) => {
  tbody.append(getRow(newProduct));
};

const getTablePrice = (objProduct) => {
  const priceNode = document.querySelector('.table-box__description-price');
  let sum = 0;

  for (const elem of objProduct) {
    sum += elem.totalPrice;
    priceNode.textContent = getPriceSimbol(sum);
  }
};

// Работа с формой
const formControl = (form, tbody) => {
  const {formOverlay} = getElements();

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newProduct = Object.fromEntries(formData);
    console.log(newProduct);

    newProduct.totalPrice = newProduct.amount * newProduct.price;
    // console.log([...formData.entries()]);

    addContactPage(tbody, newProduct);
    addNewContact(newProduct);
    getTablePrice(objProduct);
    form.reset();
    formOverlay.classList.add('form-overflow-hidden');
  });
};

const init = () => {
  const {form, tbody} = getElements();
  modalControl();
  checkboxControl();
  appendTbodyRows(objProduct);
  getTablePrice(objProduct);
  delRowControl();

  priceFormControl();
  formControl(form, tbody);
};

window.START = init;

