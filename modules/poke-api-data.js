import { RandomNumber } from "./random-number.js";

export class PokeApiData extends RandomNumber {
  constructor() {
    super();
    this.apiData = {};
  }
  request() {
    return new Promise((resolve, reject) => {
      let dataRequest = new XMLHttpRequest();

      dataRequest.onreadystatechange = () => {
        if (dataRequest.readyState === XMLHttpRequest.DONE) {
          if (dataRequest.status === 200) {
            this.cleanData(dataRequest);
            resolve(this.apiData);
          } else if (dataRequest.status > 200) {
            reject("error");
          }
        }
      };

      dataRequest.open(
        "GET",
        `https://pokeapi.co/api/v2/pokemon/${this.number}`,
        true
      );
      dataRequest.send();
    });
  }
  cleanData(dataRequest) {
    const data = JSON.parse(dataRequest.response);

    this.apiData.image =
      data.sprites.other["official-artwork"]["front_default"];
    this.apiData.icon = data.sprites.front_default;
    this.apiData.name = data.name;
    this.apiData.type = data.types[0]["type"]["name"];
  }
}
