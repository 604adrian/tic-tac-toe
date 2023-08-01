// players
function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker
  };
}

const playerOne = createPlayer("billy", "X");
const playerTwo = createPlayer("sally", "Y");

// game logic
// 0 1 2
// 3 4 5
// 6 7 8
const game = {
  board: [false, false, false, false, false, false, false, false],
  winForX: ["X", "X", "X"],
  winForY: ["Y", "Y", "Y"],
  xCurrentState: [],
  yCurrentState: [],
  wins: [
    // horizontal
    [0,1,2], [3,4,5], [6,7,8],
    // diagonal
    [0,4,8], [6,4,2]
    // vertical
    [0,3,6], [1,4,7], [2,5,8]
  ]
}

function displayBoard(position, player) {
  let status = "";

  // changing displayBoard
  if (game.board[position] === false) {
    console.log("test");
    game.board[position] = player.marker;
    status = "success"
    console.table(game.board);
  } else {
    console.log(game.board[position]);
    status = "taken!"
    console.log("ERROR: position already taken, try again!")
  }
  
  checkIfWon();

  // return
  let opponent = '';
  if (player.marker === "X") {
    opponent = "Y";
  } else {
    opponent = "X";
  };

  if (status = "taken!") {
    statment = `${game.board[position]} taken by ${opponent}!`;
  } else {
    statment = `You just got ${game.board[position]}`
  }


  return {
    statment
  }
}

function checkIfWon() {
  switch (game.board) {
    case (game.board[0] === "X" && game.board[1] === "X" && game.board[2] === "X"):
    case (game.board[3] === "X" && game.board[4] === "X" && game.board[5] === "X"):
    case (game.board[6] === "X" && game.board[7] === "X" && game.board[8] === "X"):
    case (game.board[0] === "X" && game.board[4] === "X" && game.board[2] === "X"):
    case (game.board[6] === "X" && game.board[4] === "X" && game.board[2] === "X"):
    case (game.board[0] === "X" && game.board[3] === "X" && game.board[6] === "X"):
    case (game.board[1] === "X" && game.board[4] === "X" && game.board[8] === "X"):
    case (game.board[2] === "X" && game.board[5] === "X" && game.board[8] === "X"):
      console.log("X wins, game over");
      break;
    case (game.board[0] === "Y" && game.board[1] === "X" && game.board[2] === "X"):
    case (game.board[3] === "Y" && game.board[4] === "X" && game.board[5] === "X"):
    case (game.board[6] === "Y" && game.board[7] === "X" && game.board[8] === "X"):
    case (game.board[0] === "Y" && game.board[4] === "X" && game.board[2] === "X"):
    case (game.board[6] === "Y" && game.board[4] === "X" && game.board[2] === "X"):
    case (game.board[0] === "Y" && game.board[3] === "X" && game.board[6] === "X"):
    case (game.board[1] === "Y" && game.board[4] === "X" && game.board[8] === "X"):
    case (game.board[2] === "Y" && game.board[5] === "X" && game.board[8] === "X"):
      console.log("Y wins, game over");
      break;
  }
}
