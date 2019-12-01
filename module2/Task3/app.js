'use strict';

const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

const message = 'May the force be with you';

const result = findLongestWord(message);

console.log(result);
