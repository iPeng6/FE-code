/**
 * 转圈打印矩阵
 * 给定一个整型矩阵matrix，请按照顺时针转圈的方式打印它。
 * [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
 * > [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
 */

function printMatrix(matrix) {
  // write code here
  let rowStart = 0,
    rowEnd = matrix[0].length - 1
  let colStart = 0,
    colEnd = matrix.length - 1
  let x = rowStart
  let y = colStart
  let dir = 'right'

  while (rowStart !== rowEnd || colStart !== colEnd) {
    console.log(matrix[y][x])
    if (dir === 'right' && x === rowEnd) {
      dir = 'down'
      colStart++
    } else if (dir === 'down' && y === colEnd) {
      dir = 'left'
      rowEnd--
    } else if (dir === 'left' && x === rowStart) {
      dir = 'up'
      rowStart++
    } else if (dir === 'up' && y === colStart) {
      dir = 'right'
      colEnd--
    }

    switch (dir) {
      case 'right':
        x++
        break
      case 'down':
        y++
        break
      case 'left':
        x--
        break
      case 'up':
        y--
        break
    }
  }
  // 最后一个
  console.log(matrix[y][x])
}

// printMatrix([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ])

// printMatrix([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ])

printMatrix([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
])
