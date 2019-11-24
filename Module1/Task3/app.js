"use strict";

let message;
let input;
const ADMIN_PASSWORD = "jqueryismyjam";

input = prompt("Введите пароль");

if (input === null) {
  message = "Отменено пользователем!";
} else if (input === ADMIN_PASSWORD) {
  message = "Добро пожаловать!";
} else {
  message = "Доступ запрещен, неверный пароль!";
}

console.log(message);
