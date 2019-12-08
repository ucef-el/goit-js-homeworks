"use strict";

const countProps = obj => {
  const keys = Object.keys(obj);

  const arrLength = keys.length;

  return arrLength;
};

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
