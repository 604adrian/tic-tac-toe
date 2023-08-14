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
    if (player.ai === false) {
      return false;
  }
  let rem = game.board.filter(n => n !== "X" && n !== "O");

  // list all possible moves
  const moves = [];
  const products = [];
  rem.forEach((n1) => {
    rem.forEach((n2) => {
      rem.forEach((n3) => {
        moves.push([n1,n2,n3]);
        products.push(n1*n2*n3);
        let product = n1*n2*n3;
        console.log(n1*n2*n3, product);
      })
    }) 
  });
  console.log(moves,products)
  console.log(game.wins);
  const intersection = [];
  game.wins.forEach((win) => {
    products.forEach((product) => {
      if (win===product) {
        intersection.push(product);
      }
    })
  })
  console.log(intersection);
  return;
}
/*
 *game.wins.forEach((win) => {
          if (win === n*x*y) {
            let result = {
              apart: [n, x, y],
              together: n*x*y,
            };
            results.push(result);
          }

*/
