import { Template } from "./template.js";

const template = new WeakMap();

export class Pokeball {
  constructor() {
    template.set(this, new Template());
  }

  openPokeball() {
    template.get(this).showSection();
  }

  closePokeball() {
    template.get(this).hideSection();
  }

  startAdventure() {
    template.get(this).updateSection();
  }
}
