// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the 'true' length of the string.
// BigO: O(n)
const urlify = (str, num) => {
  let updatedURL = str.trim().replace(/\s/g, '%20');
  return updatedURL;
}

urlify('today is   ', 11);
