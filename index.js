const game = {
  board: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  xChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  oChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  winner: "",
  turn: 2 
}

// players
function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
  };
}

// players
const playerOne = createPlayer("billy", "X");
const playerTwo = createPlayer("sally", "O");

// DOM elements
const aOne = document.querySelector("#zero");
const aTwo = document.querySelector("#one");
const aThree = document.querySelector("#two");
const bOne = document.querySelector("#three");
const bTwo = document.querySelector("#four");
const bThree = document.querySelector("#five");
const cOne = document.querySelector("#six");
const cTwo = document.querySelector("#seven");
const cThree = document.querySelector("#eight");

// logic for game
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
        } else {
          game.winner = false;
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
        } else {
          game.winner = false;
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

  // check if game board is full
  let openSpots = game.board.filter(item => typeof item === "number");
  console.log("open spots: ", openSpots);
  if (openSpots.join('') === '' && winner === false) {
    console.log("It's a draw!")
    game.board = [2, 3, 5, 7, 11, 13, 17, 19, 23]
    let squares = [aOne, aTwo, aThree, bOne, bTwo, bThree, cOne, cTwo, cThree];
    squares.forEach((square) => {
      square.textContent = "";
    })

  }

  return {winner}
}

function markUpBoard(square) {
  let text = square.textContent;
  if (text === "") {
    if (game.turn % 2 === 0) {
        square.textContent = "O";
      } else {
        square.textContent = "X";
      }
  }
}

// event listeners
aOne.addEventListener("click", () => {
  displayBoard(0);
  markUpBoard(aOne);
});

aTwo.addEventListener("click", () => {
  displayBoard(1);
  markUpBoard(aTwo);
});

aThree.addEventListener("click", () => {
  displayBoard(2);
  markUpBoard(aThree);
});

bOne.addEventListener("click", () => {
  displayBoard(3);
  markUpBoard(bOne);
});

bTwo.addEventListener("click", () => {
  displayBoard(4);
  markUpBoard(bTwo);
});

bThree.addEventListener("click", () => {
  displayBoard(5);
  markUpBoard(bThree);
});

cOne.addEventListener("click", () => {
  displayBoard(6);
  markUpBoard(cOne);
});

cTwo.addEventListener("click", () => {
  displayBoard(7);
  markUpBoard(cTwo);
});

cThree.addEventListener("click", () => {
  displayBoard(8);
  markUpBoard(cThree);
});


