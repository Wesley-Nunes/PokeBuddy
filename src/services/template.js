import { HtmlUtils } from "./html-utils.js";

const section = new WeakMap();

export class Template {
  constructor() {
    section.set(this, new HtmlUtils());
  }

  showSection() {
    section.get(this).style("block", "none");
    section.get(this).addElementsToHtml();
  }

  hideSection() {
    section.get(this).style("none", "none");
    section.get(this).resetElementsToHtml();
  }

  updateSection() {
    section.get(this).style("block", "block");
  }
}
