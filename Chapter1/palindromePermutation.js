// Given a string, write a function to check if it's a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// Big O: O(n)
const palindromePermutation = (str) => {
  let newStr = str.split('').reverse().join('');
  if (str === newStr) {
    return true;
  } else {
    return false;
  }
}

palindromePermutation('cat tac');
