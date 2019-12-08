"use strict";

const findBestEmployee = employee => {
  const keys = Object.keys(employee);
  let bestScore = keys[0];
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (employee[key] > employee[bestScore]) {
      bestScore = key;
      //   console.log(bestScore);
    }
  }

  return bestScore;
};

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   })
// );
