const checkPlayer = () => {
  /* checks the current player
   * by refering to counters
   * if even, its playerOne
   * if odd, its playerTwo
   * return: the current player
   */
  if (game.turn % 2 === 0) {
    return playerOne;
  } else {
    return playerTwo;
  }
}


// logic for game
function displayBoard(position) {
  let player = checkPlayer();
  console.log(player);

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

    let idNum = checker.filter(prime => prime !== player.marker);
    let theId = idNum.reduce(function(product, value) { return product * value; });
    let difference = game.boardBackup.filter(x => !idNum.includes(x)); // finds the difference  

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
      }, 1000)
    }
  }
  
  // check
  console.log(game.board);
  let winner = game.won;
  
  return { winningValues }

}

