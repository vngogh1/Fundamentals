console.log('script online!');

async function getPokemonData(pokeName) {
    // await executes this code and does not run the next line until it is completed.
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
    var pokeData = await response.json();

    return pokeData;
}


async function displayPokemonData() {
    var pokemon = await getPokemonData(document.querySelector('#pokeSearch').value.toLowerCase());
    var pokeDiv = document.querySelector('#pokemonData')

    document.querySelector('#pokemonName').innerText = pokemon.name 
    document.querySelector('.img-wrapper').innerHTML =  `<img src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>`
    document.querySelector('#type').innerText = pokemon.types[0].type.name
    document.querySelector('#height').innerText = pokemon.height;
    document.querySelector('#weight').innerText = pokemon.weight;
    document.querySelector('#baseEx').innerText = pokemon.base_experience;



    pokeDiv.innerHTML = "";
    pokeDiv.innerHTML += `<h1> ${pokemon.name} </h1>`;
    pokeDiv.innerHTML += `<img src='${pokemon.sprites.front_default}' alt='${pokemon.name}'>`
}


async function
