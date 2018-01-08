// Given a string, write a function to check if it's a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// Big O: O(n)
// First Solution
const palindromePermutation = (str) => {
  let newStr = str.split('').reverse().join('');
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}

palindromePermutation('cat tac');

// Second Solution
const palindromePermutation2 = (str) => {
  let strLength = str.length;
  let hashTable = {};

  for (let i = 0; i < strLength; i++) {
    if (!hashTable[str[i]]) {
      hashTable[str[i]] = 1;
    } else {
      let counter = hashTable[str[i]];
      counter++;
      hashTable[str[i]] = counter;
    }
  }

  if (!(strLength % 2)) {
    for (let letter in hashTable) {
      if (hashTable[letter] % 2) {
        return false;
      }
    }
  }

  for (let j = 0; j < strLength / 2; j++) {
    if (j === 0 && str[j] !== str[strLength - 1]) {
      return false;
    } else if (j > 0 && str[j] !== str[strLength - 1 - j]) {
      return false;
    }
  }
  return true;
}

palindromePermutation2('catymtac');
