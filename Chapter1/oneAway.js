// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit
// or zero edits away.

// Big O: O(n)

const oneAway = (str1, str2) => {
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

oneAway('pale', 'ple');
