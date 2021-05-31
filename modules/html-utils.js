import { PokeApiData } from "./poke-api-data.js";

const api = new WeakMap();

export class HtmlUtils {
  constructor() {
    api.set(this, new PokeApiData());
  }

  style(mainSection, childSection) {
    let section = document.querySelector("#pokemon-section");

    section.style.display = mainSection;
    section.children[1].style.display = childSection;
  }

  async addElementsToHtml() {
    let data = await api.get(this).request();
    let values = [data.image, data.name, data.type, data.name, data.icon];
    this.element(values);
  }

  resetElementsToHtml() {
    let values = ["./src/loading.gif", "", "", "", "./src/pokeball-icon.png"];
    this.element(values);
  }

  element(value) {
    for (let i = 0; i < value.length; i++) {
      this.tagToModify()[i](value[i]);
    }
  }

  tagToModify() {
    let image = (value) => {
      document.querySelector("#img").src = value;
    };
    let name = (value) => {
      document.querySelector("#poke-name").textContent = value;
    };
    let type = (value) => {
      document.querySelector("#poke-type").textContent = value;
    };
    let choosePokeName = (value) => {
      document.querySelector("#choosed-poke-name").textContent = value;
    };
    let icon = (value) => {
      document.querySelector("#pokemon-icon").src = value;
    };
    return [image, name, type, choosePokeName, icon];
  }
}
