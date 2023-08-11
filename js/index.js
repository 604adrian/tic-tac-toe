import { playerOno as playerOne } from "./intro.js";
import { playerDuo as playerTwo } from "./intro.js";

// squares on tic-tac-toe board
const aOne = document.querySelector("#zero");
const aTwo = document.querySelector("#one");
const aThree = document.querySelector("#two");
const bOne = document.querySelector("#three");
const bTwo = document.querySelector("#four");
const bThree = document.querySelector("#five");
const cOne = document.querySelector("#six");
const cTwo = document.querySelector("#seven");
const cThree = document.querySelector("#eight");
const body = document.querySelector("body");

// gui text end-game elements 
const h2 = document.createElement("h2");
h2.textContent = "";
body.appendChild(h2);

const restart = document.querySelector("#restart-button");
const buttonBoard = document.querySelector("#button-board");

// object for game
const game = {
  board: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  boardBackup: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  xChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  oChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  winnState: 0,  // stores id for animations
  turn: 2,
  squares: [aOne, aTwo, aThree, bOne, bTwo, bThree, cOne, cTwo, cThree],
  won: false
}


// winning animations
function winningAnimation(theId) {
  const body = document.querySelector("body");
  body.classList.add("background-pulse");
  switch (theId) {
    case 7436429:
      aOne.classList.add("plusating-animation");
      aTwo.classList.add("plusating-animation");
      aThree.classList.add("plusating-animation");
      break;
    case 222870:
      bOne.classList.add("plusating-animation");
      bTwo.classList.add("plusating-animation");
      bThree.classList.add("plusating-animation");
      break;
    case 30030:
      cOne.classList.add("plusating-animation");
      cTwo.classList.add("plusating-animation");
      cThree.classList.add("plusating-animation");
      break;
    case 440895:
      aOne.classList.add("plusating-animation");
      bTwo.classList.add("plusating-animation");
      cThree.classList.add("plusating-animation");
      break;
    case 238602:
      aThree.classList.add("plusating-animation");
      bTwo.classList.add("plusating-animation");
      cOne.classList.add("plusating-animation");
      break;
    case 937365:
      aOne.classList.add("plusating-animation");
      bOne.classList.add("plusating-animation");
      cOne.classList.add("plusating-animation");
      break;
    case 355810:
      aTwo.classList.add("plusating-animation");
      bTwo.classList.add("plusating-animation");
      cTwo.classList.add("plusating-animation");
      break;
    case 149226:
      aThree.classList.add("plusating-animation");
      bThree.classList.add("plusating-animation");
      cThree.classList.add("plusating-animation");
      break;
  }
}


// resets the gameboard
function gameBoardReset() {
  game.board = [2, 3, 5, 7, 11, 13, 17, 19, 23]; 
}


// resets the gameboard and everything else, too
function fullRestart() {
  playerOne.counter = 0;
  playerTwo.counter = 0;
  game.won = false;
  game.xChecker = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  game.oChecker = [2, 3, 5, 7, 11, 13, 17, 19, 23];
  game.turn = 2;
  gameBoardReset();
  game.squares.forEach((sqr) => {
    sqr.textContent = "";
    sqr.classList.remove("plusating-animation");
  });
}

// track potential redundancies
function checkForChecker(marker) {
  if (marker === "X") {
    playerOne.counter += 1;
    let checker = game.xChecker;
    return checker;
  } 
  playerTwo.counter += 1;
  let checker = game.oChecker;
  return checker;
};


// change status update
function guiStatusUpdate(term) {
  console.log("in in guiStatusUpdate");
  switch (term) {
    case ("X"):
      h2.textContent = `${playerOne.name} wins!`;
      console.log(h2.textContent);
      break;
    case ("O"):
      h2.textContent = `${playerTwo.name} wins!`;
      console.log(h2.textContent);
      break;
    case ("draw"):
      h2.textContent = `It's a draw!`;
      console.log(h2.textContent);
      break;
  }
  function removeToggles() {
    h2.classList.toggle("inOutMessage");
  }
  h2.classList.toggle("inOutMessage");
  setTimeout(() => {
    h2.textContent = "";
    removeToggles();
  }, 1000)
}


// a game win
function makeWin() {
  console.log("inside makewin");
  console.log(`${game.won.marker}`);
  let theMark = game.won.marker;
  guiStatusUpdate(theMark);
  gameBoardReset();
}


// logic for game
function displayBoard(position) {
  let player = {};

  // determine whos turn it is 
  if (game.turn % 2 === 0) {
    player = playerOne;
  } else {
    player = playerTwo;
  }
  
  let status = false;

  // prime factorization for identification
  const winningValues = [7436429, 222870, 30030, 440895, 238602, 937365, 355810, 149226]
  
  // marking free space
  let testType = typeof game.board[position];
  console.log(game.board);
  if (testType === "number") {

    let marker = player.marker;
    let checker = checkForChecker(marker);

    // update the game board
    game.board[position] = player.marker;
      
      // update x player's trackers
    checker[position] = player.marker;
    console.log(player, player.counter);

    let idNum = checker.filter(prime => prime !== player.marker);
    console.log("checker: ", idNum);
    let theId = idNum.reduce(function(product, value) { return product * value; });
    let difference = game.boardBackup.filter(x => !idNum.includes(x)); // finds the difference
    console.log("difference: ", difference);

    if (player.counter === 5) {
      difference.forEach((x) => {
        difference.forEach((y) => {
          let testTube = theId * x * y;
          winningValues.forEach((win) => {
            if (testTube === win) {
              winningAnimation(testTube);
              game.won = player 
              makeWin();
            }  
          });
        });
      });

    } else if (player.counter === 4) {
      difference.forEach((x) => {
        let testTube = theId * x;
        winningValues.forEach((win) => {
          if (testTube === win) {
            winningAnimation(testTube);
            game.won = player 
            makeWin();
          }
        })
      })

    } else if (player.counter === 3) {
      winningValues.forEach((win) => {
        if (theId === win) {
          winningAnimation(theId);
          game.won = player;
          makeWin();
        } 
      });

    } else {
      console.log("misc.")
    }

    // switch turns
    game.turn++;

  } else {
    console.log(game.board[position]);
    console.log("ERROR: position already taken, try again!")
  }

  // draw
  if (game.board.filter(x => (x !== ("O") && x !== ("X"))).join('') === '') {
    if (game.won === false) {
      gameBoardReset();
      game.won = null;
      guiStatusUpdate("draw");
      game.squares.forEach((sqr) => {
        sqr.classList.toggle("shaker");
      });
      setTimeout(() => {
        game.squares.forEach((sqr) => {
          sqr.classList.toggle("shaker");
        })
      }, 2000)
    }
  }
  
  // check
  console.log(game.board);
  let winner = game.won;
  
  return {winner}
}


// mark-up the gameboard
function markUpBoard(square) {

  if (game.won === false) {
    // mark spot
    let text = square.textContent;
    if (text === "") {
      switch (square) {
        case aOne:
          displayBoard(0);
          break;
        case aTwo:
          displayBoard(1);
          break;
        case aThree:
          displayBoard(2);
          break;
        case bOne:
          displayBoard(3);
          break;
        case bTwo:
          displayBoard(4);
          break;
        case bThree:
          displayBoard(5);
          break;
        case cOne:
          displayBoard(6);
          break;
        case cTwo:
          displayBoard(7);
          break;
        case cThree:
          displayBoard(8);
          break;
      }

      if (game.turn % 2 === 0) {
        square.textContent = "O";
      } else {
        square.textContent = "X";
      }

    } else {
      square.classList.toggle("shaker");
      square.classList.toggle("warning");
      function removeToggles() {
        square.classList.toggle("warning");
        square.classList.toggle("shaker");
      }
      setTimeout(() => {
        removeToggles();
      }, 500)
    }

   

  } else {
    game.squares.forEach((sqr) => {
      sqr.classList.toggle("shaker");
    });
    setTimeout(() => {
      game.squares.forEach((sqr) => {
        sqr.classList.toggle("shaker");
      })
    }, 500)
  }

  return
}


// event listeners
aOne.addEventListener("click", () => {
  markUpBoard(aOne);
});

aTwo.addEventListener("click", () => {
  markUpBoard(aTwo);
});

aThree.addEventListener("click", () => {
  markUpBoard(aThree);
});

bOne.addEventListener("click", () => {
  markUpBoard(bOne);
});

bTwo.addEventListener("click", () => {
  markUpBoard(bTwo);
});

bThree.addEventListener("click", () => {
  markUpBoard(bThree);
});

cOne.addEventListener("click", () => {
  markUpBoard(cOne);
});

cTwo.addEventListener("click", () => {
  markUpBoard(cTwo);
});

cThree.addEventListener("click", () => {
  markUpBoard(cThree);
});

// restart button
restart.addEventListener("click", () => {
 fullRestart();
}) 
