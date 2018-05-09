// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the 'true' length of the string.
// Time Complexity: O(n)
// Space Complexity: O(n)
// First Solution
const urlify1 = (str, len) => {
  let updatedURL = str.trim().replace(/\s/g, '%20');
  return updatedURL;
};

console.log(urlify1('today is  ', 8));


// Second Solution
const urlify2 = (str, len) => {
  let newStr = str.trim().split('');

  let updatedStr = [];
  for (let j = 0; j < newStr.length; j++) {
    if (newStr[j] === ' ') {
      updatedStr.push('%20');
    } else {
      updatedStr.push(newStr[j]);
    }
  }
  return updatedStr.join('');
};

console.log(urlify2('today is  ', 8));

const urlify3 = (str, len) => {
  let splitStr = str.split('');
  let pointer = len - 1;
  let strLen = splitStr.length - 1;
  while (strLen >= 0) {
    if (splitStr[pointer] === ' ') {
      splitStr[strLen] = '0';
      splitStr[strLen - 1] = '2';
      splitStr[strLen - 2] = '%';
      strLen -= 3;
      pointer--;
    }
    if (splitStr[strLen] === ' ' && pointer >= 0) {
      let temp = splitStr[strLen];
      splitStr[strLen] = splitStr[pointer];
      splitStr[pointer] = temp;
      pointer--;
    }
    strLen --;
  }
  return splitStr.join('');
};
console.log(urlify3('today is Tuesday    ', 16));
