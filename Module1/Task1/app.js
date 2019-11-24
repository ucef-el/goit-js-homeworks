"use strict";

const name = "Генератор защитного поля";
let price = 1000;

console.log(name);
console.log(price);

let message;

if (name === "Генератор защитного поля" && price === 1000) {
  message = "Выбран «Генератор защитного поля», цена за штуку 1000 кредитов";
} else {
  message = "Nothing";
}

console.log(message);

price = 2000;

if (name === "Генератор защитного поля" && price === 2000) {
  message = "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов";
} else {
  message = "Nothing";
}

console.log(name);
console.log(price);
console.log(message);
