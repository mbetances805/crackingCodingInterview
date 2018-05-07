const magicIndex = (arr) => {
  if (arr.length === 0) {
    return 0
  }
  return findMagic(arr, 0, arr.length - 1)
}

const findMagic = (arr, start, end) => {
  if (end < start) {
    return null
  }

  let midPoint = Math.floor((end + start) / 2)

  if (midPoint === arr[midPoint]) {
    return midPoint
  }

  if (midPoint < arr[midPoint]) {
    return findMagic(arr, start, midPoint - 1)
  }

  if (midPoint > arr[midPoint]) {
    return findMagic(arr, midPoint + 1, end)
  }
}

// console.log(magicIndex([-1, 1, 3, 4, 7, 8])) // return 1
console.log(magicIndex([-1, 0, 1, 2, 4, 10])) // return 4
