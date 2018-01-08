// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the 'true' length of the string.
// BigO: O(n)
// First Solution
const urlify1 = (str, num) => {
  let updatedURL = str.trim().replace(/\s/g, '%20');
  return updatedURL;
}

urlify1('today is   ', 8);


// Second Solution
const urlify2 = (str, num) => {
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
}

urlify2('today is Friday  ', 8);
