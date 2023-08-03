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

const game = {
  board: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  xChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  oChecker: [2, 3, 5, 7, 11, 13, 17, 19, 23],
  winnState: 0,  // stores id for animations
  turn: 2,
  squares: [aOne, aTwo, aThree, bOne, bTwo, bThree, cOne, cTwo, cThree],
}

// players
function createPlayer(name, marker, counter) {
  return {
    name: name,
    marker: marker,
    counter: 0,
  };
}


// players
const playerOne = createPlayer("billy", "X");
const playerTwo = createPlayer("sally", "O");

// winning animations
function winningAnimation(theId, winner) {
  console.log("I'm in")
  const body = document.querySelector("body");
  body.classList.add("background-pulse")
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

function checkForChecker(marker) {
  if (marker === "X") {
    playerOne.counter++;
    let checker = game.xChecker;
    return checker;
  } 
  playerTwo.counter++;
  let checker = game.oChecker;
  return checker;
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
  if (testType === "number") {

    let marker = player.marker;
    let checker = checkForChecker(marker);

    // update the game board
    game.board[position] = player.marker;
      
      // update x player's trackers
    checker[position] = player.marker;
    playerOne.counter++;
    let idNum = checker.filter(prime => prime !== player.marker);
    let theId = idNum.reduce(function(product, value) { return product * value; });

    winningValues.forEach((win) => {
      if (theId === win) {
        winningAnimation(theId, `${player.marker}`);
        console.log(`${player.marker} wins`);
        status = `${player.marker} wins`  
        game.board = [2, 3, 5, 7, 11, 13, 17, 19, 23]
      } 
    });

    // switch turns
    game.turn++;

  } else {
    console.log(game.board[position]);
    console.log("ERROR: position already taken, try again!")
  }
  
  // check
  console.log(status);
  console.log(game.board);
  
  return {status}
}

// mark-up the gameboard
function markUpBoard(square) {

  // remove shaker animation
  game.squares.forEach((sqr) => {
    sqr.classList.remove("shaker");
    sqr.style.color = "white";
  });

  // mark spot
  let text = square.textContent;
  if (text === "") {
    if (game.turn % 2 === 0) {
      square.textContent = "X";
    } else {
      square.textContent = "O";
    }
  } else {
    square.classList.add("shaker");
    square.style.color = "red";
    square.style.fontSize = "80px";
    square.style.textAlign = "center";
  }

  // check for draw
  if (status === false && openSpots.join('') === '') {
    let openSpots = game.board.filter(item => typeof item === "number");
    console.log("open spots: ", openSpots);
    console.log("It's a draw!")
    game.board = [2, 3, 5, 7, 11, 13, 17, 19, 23]
    game.squares.forEach((square) => {
      square.textContent = "";
    });
  }

  return
}

// event listeners
aOne.addEventListener("click", () => {
  markUpBoard(aOne);
  displayBoard(0);
});

aTwo.addEventListener("click", () => {
  markUpBoard(aTwo);
  displayBoard(1);
});

aThree.addEventListener("click", () => {
  markUpBoard(aThree);
  displayBoard(2);
});

bOne.addEventListener("click", () => {
  markUpBoard(bOne);
  displayBoard(3);
});

bTwo.addEventListener("click", () => {
  markUpBoard(bTwo);
  displayBoard(4);
});

bThree.addEventListener("click", () => {
  markUpBoard(bThree);
  displayBoard(5);
});

cOne.addEventListener("click", () => {
  markUpBoard(cOne);
  displayBoard(6);
});

cTwo.addEventListener("click", () => {
  markUpBoard(cTwo);
  displayBoard(7);
});

cThree.addEventListener("click", () => {
  markUpBoard(cThree);
  displayBoard(8);
});


