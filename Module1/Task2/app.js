'use strict';

/**total - количество товаров на складе */

let total = 100;

/**ordered - единиц товара в заказе */

let ordered = Number(prompt('Вводите количество товаров'));
let message;

if (total < ordered) {
  message = 'На складе недостаточно твоаров!';
} else {
  message = 'Заказ оформлен, с вами свяжется менеджер';
}

console.log(message);
