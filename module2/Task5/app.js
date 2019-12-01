'use strict';

const checkForSpam = function(string) {
  const firstWord = 'spam';
  const secondWord = 'sale';
  const inLowercase = string.toLowerCase();
  if (inLowercase.includes(firstWord) || inLowercase.includes(secondWord)) {
    return true;
  }

  return false;
};

console.log(checkForSpam('[SPAM] How to earn fast money?'));
