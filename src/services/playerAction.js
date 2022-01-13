import pokeApiRequest from "./pokeApiRequest.js";

function modifyStyle(parent, firstChild, secondChild) {
  let section = document.querySelector(".pokemon-section");
  let pokemonInfo = document.querySelector(".pokemon-info");
  let textSection = document.querySelector(".adventure");
  
  section.style.display = parent;
  pokemonInfo.style.display = firstChild;
  textSection.style.display = secondChild;
}

function modifyHtml(values) {
  document.querySelector("#pokemon-img").src = values[0];
  document.querySelector("#pokemon-icon").src = values[1];
  document.querySelector("#pokemon-name").textContent = values[2];
  document.querySelector("#choosed-pokemon-name").textContent = values[2];
  document.querySelector("#pokemon-type").textContent = values[3];
}

class playerAction {
  openPokeball() {
    modifyStyle("block", "block", "none");
    pokeApiRequest().then((response) => modifyHtml(response));
  }

  closePokeball() {
    modifyStyle("none", "none", "none");
    let values = ["./src/media/loading.webp", "./src/media/pokeball-icon.webp", "", "", ""];
    modifyHtml(values);
  }

  startAdventure() {
    modifyStyle("block", "none", "block");
  }
}

export default new playerAction();
