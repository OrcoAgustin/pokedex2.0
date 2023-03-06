export function agregarPokemonesALista(pokemones) {
  $("#lista-pokemones").html("");
  Object.keys(pokemones).forEach((numero) =>
    $(".list-group").append(
      `<a href="#" class="list-group-item pokemon-de-lista id=${[
        Number(numero) + 1,
      ]}">${pokemones[numero].name}</a>`
    )
  );
}
export async function agregarInfoCartas(pokemon) {
  //limpia la respuesta del pokemon
  $("#pokemon")
    .html(`<div class="card text-bg-secondary" id="nombre-pokemon"></div>

  <div class="card-group">
    <div class="card text-bg-secondary" id="foto-pokemon"></div>
    <div class="card text-bg-secondary" id="tipo-habilidades-pokemon">
      <div id="tipo-pokemon">
        <h4><u>Type</u></h4>
      </div>
      <div id="habilidades-pokemon">
        <h4><u>Ability</u></h4>
      </div>
    </div>
  </div>

  <div class="card-group">
    <div class="card text-bg-secondary" id="caracteristicas-pokemon">
      <h4><u>Characteristics</u></h4>
    </div>
    <div class="card text-bg-secondary" id="stats-pokemon">
      <h4><u>Stats</u></h4>
    </div>
  </div>

  <div class="card text-bg-secondary" id="movimientos-pokemon">
    <h4><u>Moves</u></h4>
  </div>`);

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
  $("#caracteristicas-pokemon").append(`<p>weight: ${
    Number(pokemon.weight) / 10
  } kg</p>
  <p>height: ${Number(pokemon.height) * 10} cm</p>
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
