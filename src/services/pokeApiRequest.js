const validRndPokemonNumber = () => Math.floor(Math.random() * 898 + 1);

async function pokeApiRequest() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${validRndPokemonNumber()}`)
    const data = await response.json();
    return [
      data.sprites.other["official-artwork"]["front_default"],
      data.sprites.front_default,
      data.name,
      data.types[0]["type"]["name"],
    ];
}

export default pokeApiRequest;
