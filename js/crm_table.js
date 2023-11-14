'use strict';

const objProduct = [
  {
  numberID: 100000000,
  productName: 'Навигационная система Soundmax',
  productCategory: 'Техника для дома',
  units: 'шт',
  amount: 5,
  price: 100,
  totalPrice: 500,
  objBtn: [
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
  ],
},
{
  numberID: 100000001,
  productName: 'Настольная игра “На 4-х ногах”',
  productCategory: 'Настольные игры',
  units: 'шт',
  amount: 12,
  price: 14,
  totalPrice: 168,
  objBtn: [
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
  ],
},
{
  numberID: 100000002,
  productName: 'Навигационная система Soundmax',
  productCategory: 'Техника для дома',
  units: 'шт',
  amount: 5,
  price: 100,
  totalPrice: 500,
  objBtn: [
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
  ],
},
{
  numberID: 100000003,
  productName: 'Настольная игра “На 4-х ногах”',
  productCategory: 'Настольные игры',
  units: 'шт',
  amount: 12,
  price: 14,
  totalPrice: 168,
  objBtn: [
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
  ],
},
{
  numberID: 100000004,
  productName: 'Навигационная система Soundmax',
  productCategory: 'Техника для дома',
  units: 'шт',
  amount: 5,
  price: 100,
  totalPrice: 500,
  objBtn: [
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
  ],
},
{
  numberID: 100000005,
  productName: 'Настольная игра “На 4-х ногах”',
  productCategory: 'Настольные игры',
  units: 'шт',
  amount: 12,
  price: 14,
  totalPrice: 168,
  objBtn: [
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
  ],
},
{
  numberID: 100000006,
  productName: 'Навигационная система Soundmax',
  productCategory: 'Техника для дома',
  units: 'шт',
  amount: 5,
  price: 100,
  totalPrice: 500,
  objBtn: [
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
  ],
},
{
  numberID: 100000007,
  productName: 'Настольная игра “На 4-х ногах”',
  productCategory: 'Настольные игры',
  units: 'шт',
  amount: 12,
  price: 14,
  totalPrice: 168,
  objBtn: [
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
  ],
},
{
  numberID: 100000008,
  productName: 'Навигационная система Soundmax',
  productCategory: 'Техника для дома',
  units: 'шт',
  amount: 5,
  price: 100,
  totalPrice: 500,
  objBtn: [
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
  ],
},
{
  numberID: 100000009,
  productName: 'Настольная игра “На 4-х ногах”',
  productCategory: 'Настольные игры',
  units: 'шт',
  amount: 12,
  price: 14,
  totalPrice: 168,
  objBtn: [
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
  ],
},
];

const btnAddProduct = document.querySelector('.table-menu__button-product');
const formOverlay = document.querySelector('.form-overflow');
const wrapFormProd = document.querySelector('.wrapper-form-product');
const btnProdFormExit = document.querySelector('.button-product-form-exit');
formOverlay.classList.add('form-overflow-hidden');

btnAddProduct.addEventListener('click', () => {
  formOverlay.classList.remove('form-overflow-hidden');
});

formOverlay.addEventListener('click', (e) => {
  const target = e.target;

  if (target === formOverlay ||
    target.closest('.button-product-form-exit')) {
    formOverlay.classList.add('form-overflow-hidden');
  }
});

const tbody = document.querySelector('.table__body');

let count = 0;

const getTr = ({
  numberID,
  productName,
  productCategory,
  units,
  amount,
  price,
  totalPrice}) => {

    const countClass = '#row-number';

  const tr = document.createElement('tr');
  tr.classList.add('table__body-row'); 

  const tdID = document.createElement('td');
  const classNameID = 'table__body-cell table__body-cell-id table__body-cell_padding_left';
  tdID.className = classNameID;
  tdID.textContent = numberID;

  const tdProductName = document.createElement('td');
  tdProductName.classList.add('table__body-cell');
  tdProductName.textContent = productName;

  const tdProductCategory = document.createElement('td');
  tdProductCategory.classList.add('table__body-cell');
  tdProductCategory.textContent = productCategory;

  const tdUnits = document.createElement('td');
  const classNameUnits = 'table__body-cell table__body-cell_color_gris';
  tdUnits.className = classNameUnits;
  tdUnits.textContent = units;

  const tdAmount = document.createElement('td');
  tdAmount.classList.add('table__body-cell');
  tdAmount.textContent = amount;

  const tdPrice = document.createElement('td');
  tdPrice.classList.add('table__body-cell');
  tdPrice.textContent = price;

  const tdTotalPrice = document.createElement('td');
  tdTotalPrice.classList.add('table__body-cell');
  tdTotalPrice.textContent = totalPrice;

    // Условия для создания классов картинке через один..

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
  }
  
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
  const classNameBtns = 'table__body-cell table__body-cell_padding_right';
  tdBtns.className = classNameBtns;
  tdBtns.id = countClass + count++;

  tdBtns.append(btnGroup.btnContainer);

  tr.append(
    tdID,
    tdProductName,
    tdProductCategory,
    tdUnits,
    tdAmount,
    tdPrice,
    tdTotalPrice,
    tdBtns)

  return tr;
};

const tr = objProduct.map(getTr);
tbody.append(...tr);

// Удаление строки таблицы и объекта из массива
const table = document.querySelector('.table');

table.addEventListener('click', (e) => {
  const target = e.target;

  if (target.closest('.btn-del')) {

    const tr = target.closest('.table__body-row');
    const numberId = tr.children[0].textContent;
    console.log(numberId);
    
    objProduct.filter((elem, index, objProduct) => {
      if (elem.numberID === +numberId) {
        const numberIdLenght = index;

        objProduct.splice(numberIdLenght, 1);
        console.log(objProduct);
      }
    }); 

    target.closest('.table__body-row').remove(); 
  }
});

// Сортировка таблицы в алфавитном порядке
table.addEventListener('click', (e) => {
  const target = e.target;
  // console.log(target)

  if (target.closest('.table__top-cell-name')) {
    

    console.log('yes');
  }
})


