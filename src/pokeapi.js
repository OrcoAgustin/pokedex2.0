export async function obtenerPokemones(pagina = 0) {
  //se usa pagina * 40,porque se muestran 40 pokemones por pagina
  return (
    await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=40&offset=${pagina * 40}`
    )
  ).json();
}
export async function obtenerPokemon(pokemonSeleccionado = 1) {
  return (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado}`)
  ).json();
}

/*
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado}`)
  .then((response) => response.json())
  .then((response) => console.log(response));
*/
