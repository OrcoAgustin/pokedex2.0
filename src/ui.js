export function agregarPokemonesALista(pokemones) {
  Object.keys(pokemones).forEach((numero) =>
    $(".list-group").append(
      `<a href="#" class="list-group-item">${pokemones[numero].name}</a>`
    )
  );
}
export async function agregarInfoCartas(pokemon) {
  //agrega nombre pokemon
  $("#nombre-pokemon").append(`<h1>${pokemon.name}</h1>`);

  //agrega foto pokemon
  $("#foto-pokemon").append(`<img src=${pokemon.sprites.front_default}></img>`);

  //agrega tipos pokemon
  Object.keys(pokemon.types).forEach((numero) =>
    $("#tipo-pokemon").append(`<p>${pokemon.types[numero].type.name}</p>`)
  );

  //agrega habilidades pokemon
  Object.keys(pokemon.abilities).forEach((numero) =>
    $("#habilidades-pokemon").append(
      `<p>${pokemon.abilities[numero].ability.name}</p>`
    )
  );

  //agrega caracteristicas pokemon
  $("#caracteristicas-pokemon").append(`<p>weight: ${pokemon.weight} kg</p>
  <p>height: ${pokemon.height} cm</p>
  <p>id: ${pokemon.id}</p>`);

  //agrega stats pokemon
  Object.keys(pokemon.stats).forEach((numero) =>
    $("#stats-pokemon").append(
      `<p>${pokemon.stats[numero].stat.name}: ${pokemon.stats[numero].base_stat} </p>`
    )
  );

  //agrega movimientos pokemon
  Object.keys(pokemon.moves).forEach((numero) =>
    $("#movimientos-pokemon").append(
      `<h6>${pokemon.moves[numero].move.name}</h6>`
    )
  );
}

export async function exponerPokemonesTotales(numero) {
  $("#cantidad-pokemones-existentes").html(`There're ${numero} pokemons`);
}
