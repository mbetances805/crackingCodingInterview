// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

// Needs update!
const rotateMatrix = (grid) => {
  let newGrid = [];
  newGrid.length = grid.length;
  let columns = Math.sqrt(grid.length);
  let counter = columns - 1;
  let newRow = 0;
  for (let i = 0; i < grid.length; i++) {
    let position = columns * (counter) + newRow;
    newGrid[i] = grid[position];
    counter--;
    if(counter < 0) {
      counter = columns - 1
      newRow++
    }
  }
  return newGrid;
}

var image = [
  [0, 0], [0, 1], [0, 2], [0, 3],
  [1, 0], [1, 1], [1, 2], [1, 3],
  [2, 0], [2, 1], [2, 2], [2, 3],
  [3, 0], [3, 1], [3, 2], [3, 3]
];

var newImage = [
[1], [2], [3],
[4], [5], [6],
[7], [8], [9]
];

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

rotateMatrix(image)
rotateMatrix(newImage)
