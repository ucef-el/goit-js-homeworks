'use strict';

const show = function(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let pos = i + 1;
    console.log(`[${pos}]`, arr[i]);
  }
};
const names = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
show(names);

const digits = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
show(digits);
