// DOM ELEMENTS
// store DOM values for names
const p1DOM = document.querySelector("#player1");
const p2DOM = document.querySelector("#player2");
// the okay button
const okayButton = document.querySelector("#okay-button");
// the checkers
const checker1 = document.querySelector("#first-checker");
const checker2 = document.querySelector("#second-checker");
// the game
const theGame = document.querySelector("#the-game");
const start = document.querySelector("#landing-screen");
// person or robot
const pTypeOne = document.querySelector(".person-or-robot-one");
const pTypeTwo = document.querySelector(".person-or-robot-two");
// first check
const p1a = document.querySelector("#radio-p1a");
const p2a = document.querySelector("#radio-p2a");
// second check
const p1b = document.querySelector("#radio-p1b");
const p2b = document.querySelector("#radio-p2b");

// write value
function p1() {
  return p2DOM.value;
}

function p2() {
  return p2DOM.value;
}

// players
function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
    counter: 1,
    ai: false
  };
}

let p2Name = p2();
let p1Name = p1();

let playerOne = createPlayer(p1Name, "X");
let playerTwo = createPlayer(p2Name, "O");

const test = 123;

// EVENT LISTENERS
window.addEventListener("load", () => {
  theGame.classList.add("landing-screen-closed");
  start.classList.add("landing-screen-opened")
});

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

// CHECK FOR AI 
if (p1a.checked === true) {
  playerOne.ai = true;
}

if (p2a.checked === true) {
  playerTwo.ai = true;
}

okayButton.addEventListener("click", () => {
  start.classList.add("landing-screen-closed");
  start.classList.remove("landing-screen-opened");
  theGame.classList.remove("landing-screen-closed");
  theGame.classList.add("landing-screen-opened");
});
