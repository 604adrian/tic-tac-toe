function roboTurnEasy() {
/* checks the current player and
 * checks if that player is an ai;
 * return: boolean
 */
  let player = checkPlayer();
  if (player.ai === false) {
    return false;
  } else {
    let rem = game.board.filter(n => n !== "X" && n !== "O");
    let ram = rem[Math.floor(Math.random()*rem.length)];
    let index = game.boardBackup.indexOf(ram);
    let square = game.squares[index];
    markUpBoard(square);
    return true;
  }
  return null;
}

function roboTurnUnbeatable() {
  let player = checkPlayer();
  let marker = player.marker;
  const check = [];

  const moves = [];
  const movesFlat = [];
  const counts = {};


  if (player === playerOne) {
    check.push(game.xChecker);
  } else {
    check.push(game.oChecker);
  }

  let checker = check[0];

  let id = checker.filter(n => (n !== playerOne.marker && n !== playerTwo.marker));

  console.log(id);
  console.log(player.counter);

  // non-redundant wins
  if (player.counter === 2) {
    id.forEach((n1) => {
      let n = id
        .filter(i => i !== n1)
        .reduce((x,y) => x*y);
      game.wins.forEach((win) => {
        if (n == win) {
          moves.push(n1);
        }
      })
    });
    for (const num of moves) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    let minMax = (function () {
      let countsArr = Object.values(counts);
      let min = Math.min(...countsArr);
      let max = Math.max(...countsArr);
      return { min, max }
    })();
  } else if (player.counter === 1) {
    id.forEach((n1) => {
      id.forEach((n2) => {
        if (n1 !== n2) {
          game.wins.forEach((win) => {
            let n = id
              .filter(i => (i !== n1 && i !== n2))
              .reduce((x,y) => x*y);
            if (n == win) {
              moves.push([n1,n2]);
              movesFlat.push(n1,n2);
            }
          });
        }
      })
    });
    for (const num of movesFlat) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log(counts);
  } else if (player.counter === 0) {
    id.forEach((n1) => {
      id.forEach((n2) => {
        id.forEach((n3) => {
          if (n1 !== n2 && n1 !== n3 && n2 !== n3) {
            game.wins.forEach((win) => {
              let n = id
                .filter(i => (i !== n1 && i !== n2 && i !== n3))
                .reduce((x,y) => x*y);
              if (n == win) {
                moves.push([n1,n2,n3]);
                movesFlat.push(n1,n2,n2);
              }
            });
          }
        });
      });
    });
    for (const num of movesFlat) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    console.log(counts);
  }
  
  if (player.counter === 2 || player.counter === 1 || player.counter === 0) {
    let countsArr = Object.values(counts);
    let countsProp = Object.keys(counts);
    for (let i=0;i<countsProp.length;i++) {
      countsProp[i] = Number(countsProp[i]);
    }
    console.log(countsArr, countsProp);
    let minMax = (function () {
      let min = Math.min(...countsArr);
      let max = Math.max(...countsArr);
      return { max }
    })();
  
    const available = (function () {
      for (let i=0;i<countsArr.length;i++) {
        if (countsArr[i] === minMax.max) {
          return { prop };
        } 
      }
      for (const p in counts) {
        if (p === minMax.max) {
          delete counts.p;
          minMax();
          available();
          console.log("trying again");
        }
      }
      return false;
    })();

  
  (function () {
     if (available !== false) {
      let max = game.board.indexOf(minMax.max);
      displayBoard(max);
      console.log("success");
    };
   })();
  
  }
}

