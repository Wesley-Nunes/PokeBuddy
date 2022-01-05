import { Pokeball } from "./services/pokeball.js";

const myPokeball = new Pokeball();

const pokeball = document.querySelector("#pokeball");
const closeBtn = document.querySelector("#close-btn");
const chooseAnother = document.querySelector("#choose-another");
const confirmAdventure = document.querySelector("#confirm-adventure");

pokeball.addEventListener("click", open);
closeBtn.addEventListener("click", close);
chooseAnother.addEventListener("click", repeatCycle);
confirmAdventure.addEventListener("click", startAdventure);

function open() {
  myPokeball.openPokeball();
}

function close() {
  myPokeball.closePokeball();
}

function repeatCycle() {
  close();
  const delayedOpen = window.setTimeout(() => open(), 350);
  delayedOpen;
}

function startAdventure() {
  myPokeball.startAdventure();
}
