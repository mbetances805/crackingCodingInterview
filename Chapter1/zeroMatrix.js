// Write an algorithm such that if an element in MxN matrix is 0, its entire row and column are set to 0.

const zeroMatrix = (a) => {
  let foundRow = null;
  let foundColumn = null;

  for (let n = 0; n < a.length; n++) {
    let first = n;

    for (let m = 0; m < a[0].length; m++) {
      if (a[first][m] === 0) {
        foundRow = first;
        foundColumn = m;
      }
    }
  }

  for (let row = 0; row < a.length; row++) {
    a[row][foundColumn] = 0;
    if (row === foundRow) {
      for (let i = 0; i < a[0].length; i++) {
        a[foundRow][i] = 0
      }
    }
  }
  return a;
}

const m = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 0, 11, 12]]

zeroMatrix(m);
