// DOM ELEMENTS
// store DOM values for names
const p1DOM = document.querySelector("#player1");
const p2DOM = document.querySelector("#player2");
// the okay button
const okayButton = document.querySelector("#okay-button");
// the checkers
const checker1 = document.querySelector("#first-checker");
const checker2 = document.querySelector("#second-checker");

// write value
function p1() {
  return p2DOM.value;
}

function p2() {
  return p2DOM.value;
}

// players
class Player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
    this.counter = 0;
  }
}


let p2Name = p2();
let p1Name = p1();

let playerTwo = new Player(p2Name, "O");
let playerOne = new Player(p1Name, "X");


// EVENT LISTENERS
p1DOM.addEventListener("input", () => {
  if (p1DOM.value !== playerTwo.name) {
    if (p1DOM.value.length > 1) {
      checker1.textContent = "❌"; 
    }
    checker1.textContent = "✅";
    playerOne.name = p1DOM.value;
  } else {
    checker1.textContent = "❌";
  }
  checker1.classList.toggle("shaker");
  setTimeout(() => {
    checker1.classList.toggle("shaker");
  }, 100);
})

p2DOM.addEventListener("input", () => {
  if (playerOne.name !== p2DOM.value) {
    checker2.textContent = "✅";
    playerTwo.name = p2DOM.value;
  } else {
    checker2.textContent = "❌";
  }
  checker2.classList.toggle("shaker");
  setTimeout(() => {
    checker2.classList.toggle("shaker");
  }, 100);
})

// the okaybutton
okayButton.addEventListener("click", () => {
  window.location.assign("game.html");
});


export { playerOne, playerTwo };
