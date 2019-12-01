'use strict';

const formatString = function(string) {
  let result;
  const symbols = string.split('');
  const neededlength = 40;
  const symbolsQuatity = neededlength;
  if (string.length < symbolsQuatity) {
    result = string;
  } else {
    symbols.splice(39, 50, '...');
    let a = symbols.join('');
    result = a;
  }
  return result;
};

const a = 'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.';

formatString(a);
console.log(formatString(a));

// const a = "hello world";
// const b = a.split("");

// // console.log(a.length);
// let message = "good";
// let addedSymbols = string.length - 40;
// if (string.length <= 40) {
//   console.log(message);
// } else {
//   console.log(addedSymbols);
// }
