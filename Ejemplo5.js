const api="https://pokeapi.co/api/v2/pokemon/1/";



//fetch lo que hace es una consulta a una url mediante de los verbos de http

async function consultarPokemon()
{
    let consulta = await fetch(api);
    let datos = await consulta.json();
    dibujarPokemon(datos);

}

function dibujarPokemon(datosPokemon)
{
    let rutaImagen = datosPokemon.sprites.other.home.front_default;
     
    let pokemon = `<h1>${datosPokemon.name}</h1> 
     <img src="${rutaImagen}"/> 
     <h1>${datosPokemon.types[0].type.name}</h1>`;
    contenedor.innerHTML = pokemon;
}



consultarPokemon();

