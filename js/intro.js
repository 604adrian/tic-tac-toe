// DOM ELEMENTS
// store DOM values for names
const p1DOM = document.querySelector("#player1");
const p2DOM = document.querySelector("#player2");
// error messages
const errorOne = document.querySelector("#message-1");
const errorTwo = document.querySelector("#message-2");
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
    counter: 0,
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
    errorOne.textContent = "";
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
    errorTwo.textContent = "";
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
p1a.addEventListener("click", () => {
  playerOne.ai = false;
});

p2a.addEventListener("click", () => {
  playerOne.ai = true;
});

p1b.addEventListener("click", () => {
  playerTwo.ai = false;
});

p2b.addEventListener("click", () => {
  playerTwo.ai = true;
})

okayButton.addEventListener("click", () => {
  if (playerOne.name !== "" && playerTwo.name !== "") {
    start.classList.add("landing-screen-closed");
    start.classList.remove("landing-screen-opened");
    theGame.classList.remove("landing-screen-closed");
    theGame.classList.add("landing-screen-opened");
  } else {
    if (playerOne.name === "") {
      errorOne.textContent = "Player must have a name!"
      checker1.textContent = "❌";
      checker1.classList.toggle("shaker");
        setTimeout(() => {
          checker1.classList.toggle("shaker");
        }, 100);
    }
    if (playerTwo.name === "") {
      errorTwo.textContent = "Player must have a name!";
      checker2.textContent = "❌";
      checker2.classList.toggle("shaker");
        setTimeout(() => {
          checker2.classList.toggle("shaker");
        }, 100);
    }  
  }
});
