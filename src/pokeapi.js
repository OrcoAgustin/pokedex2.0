export async function obtenerPokemones() {
  return (await fetch(`https://pokeapi.co/api/v2/pokemon`)).json();
}
export async function obtenerPokemon(pokemonSeleccionado = 1) {
  return (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonSeleccionado}`)
  ).json();
}
