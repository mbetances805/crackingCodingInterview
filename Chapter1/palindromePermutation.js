// Given a string, write a function to check if it's a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// Time Complexity: O(n)
// Space Complexity: O(n)
// First Solution
const checkPalindrome = (str) => {
  let countOfWords = {};
  let singleLetterCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      let letter = str[i].toLowerCase()
      if (countOfWords[letter]) {
        let counter = countOfWords[letter]++;
        counter++;
        countOfWords[letter] = counter;
      } else {
        countOfWords[letter] = 1;
      }
    }
  }
  for (let letter in countOfWords) {
    if (countOfWords[letter] % 2) {
      singleLetterCount++;
    }
    if (singleLetterCount > 1) {
      return false;
    }
  }
  return true;
};

console.log(checkPalindrome('attco cta'));
