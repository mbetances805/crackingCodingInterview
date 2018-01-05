// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

const rotateMatrix = (a) => {
  if (a.length === 0 || a.length !== a[0].length) {
    return false;
  }
  let n = a.length;

  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer;
    let last = n - 1 - layer;

    for (let i = first; i < last; i++) {
      let offset = i - first;
      let top = a[first][i];
      a[first][i] = a[last - offset][first];
      a[last - offset][first] = a[last][last - offset];
      a[last][last - offset] = a[i][last];
      a[i][last] = top;
    }
  }
  return a;
}

// test
matrixOne = [[1,2,3],
 [4,5,6],
 [7,8,9]];

 matrixTwo = [[40,12,15,37,33,11,45,13,25,3],
 [37,35,15,43,23,12,22,29,46,43],
 [44,19,15,12,30,2,45,7,47,6],
 [48,4,40,10,16,22,18,36,27,48],
 [45,17,36,28,47,46,8,4,17,3],
 [14,9,33,1,6,31,7,38,25,17],
 [31,9,17,11,29,42,38,10,48,6],
 [12,13,42,3,47,24,28,22,3,47],
 [38,23,26,3,23,27,14,40,15,22],
 [8,46,20,21,35,4,36,18,32,3]];

 rotateMatrix(matrixOne);
 rotateMatrix(matrixTwo);
