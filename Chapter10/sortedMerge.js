const sortedMerge = (a, b) => {
  let aLastIndex = a.length - 1,
      bLastIndex = b.length - 1,
      aIndex = a.length - b.length - 1;

  while (bLastIndex >= 0) {
    if (a[aIndex] >= b[bLastIndex]) {
      a[aLastIndex] = a[aIndex]
      aIndex--
    } else {
      a[aLastIndex] = b.pop()
      bLastIndex--
    }
    aLastIndex--
  }
  return a
}

let a = [2, 3, 5, 8, 10, null, null, null, null, null]
let b = [1, 4, 6, 7, 9]

console.log(sortedMerge(a, b))
