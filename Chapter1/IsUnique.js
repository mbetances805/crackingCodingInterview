// implement an algorithm to determine if a string has all unique characters. what if you cannot use additional data structures?

// Big O: O(n)
let string = 'today is Friday'

const isUnique = (str) => {
  let hashMap = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] in hashMap) {
      return false;
    } else {
      hashMap[str[i]] = i;
    }
  }
  return true;
}
isUnique(string);

// if cannot use additional data structures

// Big O: O(n^2)
const isUnique2 = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

isUnique2(string);
