'use strict';

const input = prompt('введите имя страны');
let value;

if (input !== null) {
  value = input.toLowerCase();
} else {
  value = input;
}

let message;
let price;

const CHINA = 'китай';
const CHILE = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';

if (value === null) {
  alert('Отменено пользователем!');
} else {
  switch (value) {
    case CHINA:
      price = 100;
      message = `Доставка в ${CHINA} будет стоить ${price} кредитов`;
      break;

    case CHILE:
      price = 250;
      message = `Доставка в ${CHILE} будет стоить ${price} кредитов`;
      break;

    case AUSTRALIA:
      price = 170;
      message = `Доставка в ${AUSTRALIA} будет стоить ${price} кредитов`;
      break;

    case INDIA:
      price = 80;
      message = `Доставка в ${INDIA} будет стоить ${price} кредитов`;
      break;

    case JAMAICA:
      price = 120;
      message = `Доставка в ${JAMAICA} будет стоить ${price} кредитов`;
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
}

console.log(message);
