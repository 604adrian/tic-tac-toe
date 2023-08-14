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

const reset = document.querySelector("#total-reset");
const restart = document.querySelector("#restart-button");
const buttonBoard = document.querySelector("#button-board");

// object for game
const game = {
  board: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  boardBackup: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  xChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  oChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  winState: [],
  turn: 2,
  squares: [aOne, aTwo, aThree, bOne, bTwo, bThree, cOne, cTwo, cThree],
  won: false,
  wins: [7436429, 222870, 30030, 440895, 238602, 937365, 355810, 149226] 
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

