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

      if (game.turn % 2 !== 0) {
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


// EVENT LISTENERS
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

// game buttons
reset.addEventListener("click", () => {
  // launch landing page again;
  start.classList.remove("landing-screen-closed");
  theGame.classList.add("landing-screen-closed");
  // reset player information
  playerOne.name = "";
  playerTwo.name = "";
  // reset DOM values
  p1DOM.value = "";
  p2DOM.value = "";
  // checkers
  checker1.textContent = "";
  checker2.textContent = "";
  // reset game
  game.won = false;
  fullRestart();
  
})

restart.addEventListener("click", () => {
  fullRestart();
}) 

