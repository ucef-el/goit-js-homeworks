"use strict";

// const add = function() {
//   if (Number.isNaN(arguments)) {
//     alert()
//   }else {
//     const args = Array.from(arguments);
//   }

let total = 0;
const numbers = [];
let result;

while (true) {
  const input = prompt("Введите число");
  let value;
  let number;

  if (input === null) {
    break;
  }
  value = Number(input);

  if (Number.isNaN(value)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(value);
  }
}

for (let i = 0; i < numbers.length; i += 1) {
  result = total += numbers[i];
}
console.log(numbers);

console.log(result);
