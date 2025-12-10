"use strict";

const btns = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", showModal);
}

closeModalBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}
