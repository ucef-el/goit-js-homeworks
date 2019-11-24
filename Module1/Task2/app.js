"use strict";

let total = "количество товаров на складе";
let ordered = "единиц товара в заказе";

total = 100;

ordered = prompt("Вводите количество товаров");

let message;

if (ordered > total) {
  message = "На складе недостаточно твоаров!";
} else {
  message = "Заказ оформлен, с вами свяжется менеджер";
}

console.log(message);
