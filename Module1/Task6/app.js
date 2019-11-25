'use strict';

let total = 0;

while (true) {
  let input = prompt('введите число');

  if (input === null) {
    break;
  }

  input = Number(input);

  const validNumber = Number(input);

  if (Number.isNaN(input)) {
    alert(`Было введено не число, попробуйте еще раз`);
    break;
  }

  total += input;
}

alert(`Общая сумма чисел равна ${total}`, total);
// let total = 0;

// while (true) {
//   const input = prompt('Введите число!');

//   if (input === null) {
//     break;
//   }

//   const value = Number(input);

//   if (Number.isNaN(value)) {
//     alert('Было введено не число, попробуйте еще раз');
//   }

//   total += value;
// }

// alert(`Общая сумма чисел равна ${total}`);
