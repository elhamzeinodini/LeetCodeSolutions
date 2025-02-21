// there a snake in a 2 * 8 column , snake is at the row 1 column 1, snake movements are as follows:
// L : In the left row, it moves to the opposite square
// R : In the right row, it moves to the opposite square
// F : In the same, it goes to the next square

// input : a string of length 7 with L , R , F
// output : two strings (because of having two rows) of length 7, 0 indicates the absence of the snake
// in that square and 1 indicates the presence of it

function bendingSnake(moves) {
  const container = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
  ];

  const maxMovement = 7;

  let row = 1;
  let col = 0;

  if (moves.length < maxMovement) return;

  for (let move of moves) {
    if (move === "L") {
      if (row === 0) return "DEATH";

      row--;
      col++;
      container[row][col] = 1;
    } else if (move === "R") {
      if (row === 1) return "DEATH";

      row++;
      col++;
      container[row][col] = 1;
    } else if (move === "F") {
      if (col >= 7) return "DEATH";

      col = col + 1;
      container[row][col] = 1;
    } else return "Unknown Move";
  }

  return container.map((item) => item.join("")).join("\n");
}

console.log(bendingSnake("FFLFFFF"));
console.log(bendingSnake("FFFFFFF"));
console.log(bendingSnake("FLFRFLF"));
console.log(bendingSnake("FRFFFFF"));
console.log(bendingSnake("FLFFFFF"));
console.log(bendingSnake("FRFRFFF"));
console.log(bendingSnake("FFFFFFR"));

module.exports = {
  bendingSnake,
};
