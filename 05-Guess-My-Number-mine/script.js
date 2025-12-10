"use strict";

let randomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⚠ No Number");
  } else if (guess === randomNumber) {
    displayMessage("🎉 Correct Number");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    // if (!highScore || score > highScore) { // ! We don't need the first condition because the hight score is always higher than 0
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > randomNumber ? "☝ Too High" : "👇 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💣 You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".number").textContent = "?";
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});

function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
