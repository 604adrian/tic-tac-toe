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
player1.textContent = player1.value;
const player1Name = player1.textContent;

const player2 = document.querySelector("#player2");
player2.textContent = player2.value;
const player2Name = player2.textContent;

// players
const playerOno = createPlayer(player1Name, "X");
const playerDuo = createPlayer(player2Name, "O");

// the okaybutton
const okayButton = document.querySelector("#okay-button");
okayButton.addEventListener("click", ()=> {
  window.location.assign("game.html");
});

