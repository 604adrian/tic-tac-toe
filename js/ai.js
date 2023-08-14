function roboTurn(player) {
      /* checks the current player and
       * checks if that player is an ai;
       * return: boolean
       */
      let player = checkPlayer();
      if (player.ai === true) {
        let rem = game.board.filter(n => n !== "X" && n !== "O");
        let ram = rem[Math.floor(Math.random()*rem.length)];
        let index = game.boardBackup.indexOf(ram);
        let square = game.squares[index];
        markUpBoard(square);
      }
      if (game.won === true) {
        return;
      }
}
