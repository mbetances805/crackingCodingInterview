// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit
// or zero edits away.

// Big O: O(n)
// First Solution
const oneAway1 = (str1, str2) => {
  let hashMap = {};
  let counter = 0;
  let longestStr = longestString(str1, str2);
  let shortestStr = shortestString(str1, str2);
  if (Math.abs(str1.length - str2.length) <= 1) {
    for (let i = 0; i < longestStr.length; i++) {
      let counter = 0;
      if (hashMap[longestStr[i]]) {
        counter = longestStr[i];
        counter++;
        hashMap[longestStr[i]] = counter;
      } else {
        hashMap[longestStr[i]] = 1;
      }
    }

    for (let j = 0; j < shortestStr.length; j++) {
      if (shortestStr[j] in hashMap) {
        counter++;
      }
    }

    if (counter === shortestStr.length || (shortestStr.length === longestStr.length && counter + 1 === shortestStr.length)) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const longestString = (str1, str2) => {
  if (str1.length >= str2.length) {
    return str1;
  } else {
    return str2;
  }
}

const shortestString = (str1, str2) => {
  if (str1.length < str2.length) {
    return str1;
  } else {
    return str2;
  }
}

oneAway1('pale', 'ple');

// Second Solution
const oneAway2 = (str1, str2) => {
  let hashTable = {};
  let longestWord = '';
  let shortestWord = '';

  if (str1.length > str2.length || str1.length === str2.length) {
    longestWord = str1;
    shortestWord = str2;
  } else {
    longestWord = str2;
    shortestWord = str1;
  }

  if (longestWord.length - shortestWord.length > 1) {
    return false;
  }

  for (let i = 0; i < longestWord.length; i++) {
    if (hashTable[longestWord[i]]) {
      let counter = hashTable[longestWord[i]];
      counter++;
      hashTable[longestWord[i]] = counter;
    } else {
      hashTable[longestWord[i]] = 1;
    }
  }

  for (let j = 0; j < shortestWord.length; j++) {
    if (hashTable[shortestWord[j]]) {
      let counter = hashTable[shortestWord[j]]
      counter--;
      hashTable[shortestWord[j]] = counter;
      if (counter < 0) {
        return false;
      }
    }
  }
  let total = 0;
  for (let letter in hashTable) {
    total += hashTable[letter];
    if (total > 1) {
      return false;
    }
  }
  return true;
}

oneAway2('pale', 'ple');
