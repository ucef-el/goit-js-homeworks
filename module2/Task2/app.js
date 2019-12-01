'use strict';

const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' ');
  const wordsQuantity = words.length;
  const total = pricePerWord * wordsQuantity;

  return total;
};

let text = 'Proin sociis natoque et magnis parturient montes mus';
let amount = 10;

const price = calculateEngravingPrice(text, amount);
console.log(price);

let secondAmount = 20;
const secondPrice = calculateEngravingPrice(text, secondAmount);

console.log(secondPrice);
