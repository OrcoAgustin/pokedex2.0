import { obtenerPokemones, obtenerPokemon } from "./pokeapi.js";
import {
  agregarPokemonesALista,
  agregarInfoCartas,
  exponerPokemonesTotales,
} from "./ui.js";

//let page = 0;

async function inicializar() {
  const { count: pokemonesTotales, results: pokemones } =
    await obtenerPokemones();

  exponerPokemonesTotales(pokemonesTotales);
  agregarPokemonesALista(pokemones);

  agregarInfoCartas(await obtenerPokemon());
}

inicializar();
