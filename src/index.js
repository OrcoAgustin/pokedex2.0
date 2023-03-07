import { obtenerPokemones, obtenerPokemon } from "./pokeapi.js";
import {
  agregarPokemonesALista,
  agregarInfoCartas,
  exponerPokemonesTotales,
} from "./ui.js";

let pagina = 0;

async function actualizarCartas() {
  agregarInfoCartas(await obtenerPokemon($(".active").attr("id")));
}

async function actualizarLista() {
  const { results: pokemones } = await obtenerPokemones(pagina);

  agregarPokemonesALista(pokemones, pagina, actualizarCartas);
}

async function inicializar() {
  const { count: pokemonesTotales, results: pokemones } =
    await obtenerPokemones();

  exponerPokemonesTotales(pokemonesTotales);
  agregarPokemonesALista(pokemones, pagina, actualizarCartas);

  agregarInfoCartas(await obtenerPokemon());
}

//pasar pags en la lista
$("#pag-anterior").click(function () {
  if (pagina > 0) {
    pagina = pagina - 1;
    actualizarLista();
  }
});

$("#pag-siguiente").click(function () {
  pagina = pagina + 1;
  actualizarLista();
});

$("#boton-buscar").click(async function () {
  agregarInfoCartas(await obtenerPokemon($("#barra-buscar").val()));
});

inicializar();
