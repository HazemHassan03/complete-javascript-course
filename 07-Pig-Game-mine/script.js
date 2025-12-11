"use strict";

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");
const player1TotalScore = document.getElementById("score--0");
const player2TotalScore = document.getElementById("score--1");
const player1CurrentScore = document.getElementById("current--0");
const player2CurrentScore = document.getElementById("current--1");
const btnNewGame = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");

let isPlaying = true;

let player1Data = {
  score: 0,
  displayedTotalScore: player1TotalScore,
  displayedCurrentScore: player1CurrentScore,
  playerUI: player1,
};

let player2Data = {
  score: 0,
  displayedTotalScore: player2TotalScore,
  displayedCurrentScore: player2CurrentScore,
  playerUI: player2,
};

let currentScore = 0;
let activePlayer = player1Data;

btnRoll.addEventListener("click", rollDiceHandler);
btnHold.addEventListener("click", holdHandler);
btnNewGame.addEventListener("click", resetGame);

function rollDiceHandler() {
  if (isPlaying) {
    const random = rollDice();
    if (random === 1) {
      switchPlayer();
    } else {
      addCurrentScore(random);
    }
  }
}

function holdHandler() {
  if (isPlaying) {
    activePlayer.score += currentScore;
    resetCurrentScore();
    activePlayer.displayedTotalScore.textContent = activePlayer.score;
    if (activePlayer.score >= 100) {
      finishGame();
    } else {
      switchPlayer();
    }
  }
}

function rollDice() {
  const random = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${random}.png`;
  dice.classList.remove("hidden");
  return random;
}

function addCurrentScore(score) {
  currentScore += score;
  showCurrentScore();
}

function showCurrentScore() {
  activePlayer.displayedCurrentScore.textContent = currentScore;
}

function resetCurrentScore() {
  currentScore = 0;
}

function switchPlayer() {
  resetCurrentScore();
  showCurrentScore();
  activePlayer = activePlayer === player1Data ? player2Data : player1Data;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
}

function finishGame() {
  activePlayer.playerUI.classList.remove("player--active");
  activePlayer.playerUI.classList.add("player--winner");
  isPlaying = false;
  dice.classList.add("hidden");
  btnRoll.classList.add("hidden");
  btnHold.classList.add("hidden");
}

function resetGame() {
  player1Data.score = 0;
  player1Data.currentScore = 0;
  player2Data.score = 0;
  player2Data.currentScore = 0;
  dice.src = "";
  dice.classList.add("hidden");
  player1TotalScore.textContent = 0;
  player2TotalScore.textContent = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  activePlayer.playerUI.classList.remove("player--winner");
  player2.classList.remove("player--active");
  player1.classList.add("player--active");
  activePlayer = player1Data;
  isPlaying = true;
  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");
}
