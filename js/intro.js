// players
function createPlayer(name, marker, counter) {
  return {
    name: name,
    marker: marker,
    counter: 0,
  };
}

// store DOM values for names
const player1 = document.querySelector("#player1");
const player1Name = player1.value;

const player2 = document.querySelector("#player2");
const player2Name = player2.value;

// players
const playerOne = createPlayer(player1Name, "X");
const playerTwo = createPlayer(player2Name, "O");

// the okaybutton
const okayButton = document.querySelector("#okay-button");
okayButton.addEventListener("click", ()=> {
  window.location.assign("game.html");
});
