const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr
  }
  
  let middle = Math.floor(arr.length / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle)
  
  return sort(mergeSort(left), mergeSort(right))
}

const sort = (left, right) => {
  let leftIndex = 0,
      rightIndex = 0,
      result = []
    
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
              
let test = [4,6,78,34,90,33,22,1,5,7]
mergeSort(test)
