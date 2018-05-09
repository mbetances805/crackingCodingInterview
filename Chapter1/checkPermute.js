// Given two strings, write a method to decide if one is a permutation of the other?
// Time Complexity: O(n)
// Space Complexity: O(n)
const checkPermutation = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  } else {
    let str1Sort = str1.split('').sort().join();
    let str2Sort = str2.split('').sort().join();
    if (str1Sort === str2Sort) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkPermutation('god    ', 'dog'));


const checkPermutation2 = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) {
    return false;
  }
  let sortedStrOne = strOne.split('').sort().join('').toLowerCase();
  let sortedStrTwo = strTwo.split('').sort().join('').toLowerCase();

  let isPermutation = sortedStrOne === sortedStrTwo ? true : false
  return isPermutation;
}

console.log(checkPermutation2('god    ', 'dog'))

// Time Complexity: O(n)
// Space Complexity: O(1)
const checkPermutation3 = (strOne, strTwo) => {
  if (strOne.length !== strTwo.length) {
    return false;
  }
  
  let charSet = new Array(128);
  
  for (let i = 0; i < strOne.length; i++) {
    let letter = strOne[i].toLowerCase();
    if (charSet[letter.charCodeAt(0)]) {
      charSet[letter.charCodeAt(0)] = charSet[letter.charCodeAt(0)]++;
    } else {
      charSet[letter.charCodeAt(0)] = 1;
    }
  }
  
  for (let j = 0; j < strTwo.length; j++) {
    let letter = strTwo[j].toLowerCase();
    if (charSet[letter.charCodeAt(0)]) {
      charSet[letter.charCodeAt(0)] = charSet[letter.charCodeAt(0)]--;
      if (charSet[letter.charCodeAt(0)] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation3('gody', 'dogj'))
