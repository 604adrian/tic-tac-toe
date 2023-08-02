// game logic
// 0 1 2   H A L
// 3 4 5   H A L
// 6 7 8   H A L
const game = {
  board: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  xChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  oChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  winner: "",
  turn: 1 
}

// players
function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
  };
}

const playerOne = createPlayer("billy", "X");
const playerTwo = createPlayer("sally", "O");

function displayBoard(position) {
  let player = {};

  // determine whos turn it is 
  if (game.turn % 2 === 0) {
    player = playerOne;
  } else {
    player = playerTwo;
  }

  let status = "";

  // prime factorization for identification
  const winningValues = [7436429, 222870, 30030, 440895, 238602, 937365, 355810, 149226]

  // marking free space
  let testType = typeof game.board[position];
  if (testType === "number") {

    // update the game board
    game.board[position] = player.marker;
    status = "success"
    
    // update player's trackers
    if (player.marker === "X") {
      game.xChecker[position] = "X";
      let idNum = game.xChecker.filter(prime => prime !== "X");
      console.log(idNum);
      let theId = idNum.reduce(function(product, value) { return product * value; });
      console.log(theId);
      winningValues.forEach((win) => {
        if (theId === win) {
          console.log("X wins");
          game.winner = "X";
          game.board = [2, 3, 5, 7, 11, 13, 17, 19, 23]
        }
      });

    } else if (player.marker === "O") {
      game.oChecker[position] = "O";
      let idNum = game.oChecker.filter(prime => prime !== "O");
      console.log(idNum);
      let theId = idNum.reduce(function(product, value) { return product * value; });
      console.log(theId);
      winningValues.forEach((win) => {
        if (theId === win) {
          console.log("0 wins");
          game.winner = "O";
          game.board = [2, 3, 5, 7, 11, 13, 17, 19, 23]
        }
      });

    } else {
      game.winner = false;
    }
    
    // swithc turns
    game.turn++;

  } else {
    console.log(game.board[position]);
    status = "taken!"
    console.log("ERROR: position already taken, try again!")
  }
  // check
  let winner = game.winner;
  console.log(game.winner);
  console.table(game.board);
  return {winner}
}

