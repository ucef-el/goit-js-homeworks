"use strict";

const getAllPropValues = (array, prop) => {
  const values = [];

  for (const item of array) {
    if (prop in item) {
      values.push(item[prop]);
    }
  }

  return values;
};

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

console.log(getAllPropValues(products, "pr"));
