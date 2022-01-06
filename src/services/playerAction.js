import pokeApiRequest from "./pokeApiRequest.js";

function modifyStyle(parent, child) {
  let section = document.querySelector("#pokemon-section");

  section.style.display = parent;
  section.children[1].style.display = child;
}

function modifyHtml(values) {
  document.querySelector("#img").src = values[0];
  document.querySelector("#pokemon-icon").src = values[1];
  document.querySelector("#poke-name").textContent = values[2];
  document.querySelector("#choosed-poke-name").textContent = values[2];
  document.querySelector("#poke-type").textContent = values[3];
}

class playerAction {
  openPokeball() {
    modifyStyle("block", "none");
    pokeApiRequest().then((response) => modifyHtml(response));
  }

  closePokeball() {
    modifyStyle("none", "none");
    let values = ["./src/media/loading.webp", "./src/media/pokeball-icon.webp", "", "", ""];
    modifyHtml(values);
  }

  startAdventure() {
    modifyStyle("block", "block");
  }
}

export default new playerAction();
