import playerAction from "./services/playerAction.js";

const pokeball = document.querySelector("#pokeball");
const closeBtn = document.querySelector("#close-btn");
const chooseAnother = document.querySelector("#choose-another");
const confirmAdventure = document.querySelector("#confirm-adventure");

pokeball.addEventListener("click", () => playerAction.openPokeball());

closeBtn.addEventListener("click", () => playerAction.closePokeball());

chooseAnother.addEventListener("click", () => {
  playerAction.closePokeball()
  const delayedOpen = window.setTimeout(() => playerAction.openPokeball(), 350);
  delayedOpen;
});

confirmAdventure.addEventListener("click", () => playerAction.startAdventure());

