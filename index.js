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
const message = document.querySelector("#message");

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

function gameBoardReset() {
  game.board = [2, 3, 5, 7, 11, 13, 17, 19, 23]; 
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

function checkForChecker(marker) {
  if (marker === "X") {
    playerOne.counter += 1;
    let checker = game.xChecker;
    return checker;
  } 
  playerTwo.counter += 1;
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
              console.log(`${player.marker} wins`);
              status = `${player.marker} wins`;
              game.won = player;
              gameBoardReset();
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
            console.log(`${player.marker} wins`);
            status = `${player.marker} wins`  
            game.won = player;
            gameBoardReset();
          }
        })
      })

    } else if (player.counter === 3) {
      winningValues.forEach((win) => {
        if (theId === win) {
          winningAnimation(theId);
          console.log(`${player.marker} wins`);
          status = `${player.marker} wins`; 
          game.won = player;
          gameBoardReset();
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

  if (game.board.filter(x => (x !== ("O") && x !== ("X"))).join('') === '') {
    if (game.won === false) {
      gameBoardReset();
      game.won = null;
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

  // remove shaker animation
  //game.squares.forEach((sqr) => {
    //sqr.classList.remove("shaker");
    //sqr.style.color = "white";
  //});

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
        square.textContent = "X";
      } else {
        square.textContent = "O";
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


