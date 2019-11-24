"use strict";

const credits = 23580;
const pricePerDroid = 3000;

const promptLabel = "How many droids you wanna buy?";

let input = prompt(promptLabel);

let totalPrice = input * pricePerDroid;

let message;

if (input === null) {
  message = "'Отменено пользователем!'";
} else if (totalPrice > credits) {
  message = "Недостаточно средств на счету!";
} else {
  message = `Вы купили ${input} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
}

console.log(message);
