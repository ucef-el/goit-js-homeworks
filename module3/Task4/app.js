"use strict";

const countTotalSalary = salaries => {
  const keys = Object.keys(salaries);
  let total = 0;
  for (const key of keys) {
    const salary = salaries[key];
    total += salary;
    // console.log(total);
  }

  return total;
};

console.log(countTotalSalary({}));
