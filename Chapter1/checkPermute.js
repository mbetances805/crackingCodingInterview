// Given two strings, write a method to decide if one is a permutation of the other?
// Big O: O(n)
const checkPermute = (str1, str2) => {
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

checkPermute('isa', 'ais');
