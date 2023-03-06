import { obtenerPokemones, obtenerPokemon } from "./pokeapi.js";
import {
  agregarPokemonesALista,
  agregarInfoCartas,
  exponerPokemonesTotales,
} from "./ui.js";

let page = 0;

async function actualizarLista() {
  const { results: pokemones } = await obtenerPokemones(page);

  agregarPokemonesALista(pokemones);
}

async function inicializar() {
  const { count: pokemonesTotales, results: pokemones } =
    await obtenerPokemones();

  exponerPokemonesTotales(pokemonesTotales);
  agregarPokemonesALista(pokemones);

  agregarInfoCartas(await obtenerPokemon());
}

//pasar pags en la lista
$("#pag-anterior").click(function () {
  page = page - 1;
  actualizarLista();
});

$("#pag-siguiente").click(function () {
  page = page + 1;
  actualizarLista();
});

/*
$(".list-group-item").on("click", function () {
  alert("click");
});
*/

$("#boton-buscar").click(async function () {
  agregarInfoCartas(await obtenerPokemon($("#barra-buscar").val()));
});

inicializar();
