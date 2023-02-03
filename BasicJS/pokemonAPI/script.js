// document.querySelector('#pokeSearch')="";

// let pokeSearch = document.querySelector('#pokeSearch');



async function getPokeData(){
    let pokeSearch = document.querySelector('#pokeSearch');
    
    console.log(pokeSearch.value);

    let pokeName = document.querySelector('#pokeName');

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokeSearch.value.toLowerCase());
    console.log(response);

    document.getElementById("hidden").style.display = "block";
    
    let pokeData = await response.json();
    console.log(pokeData);
    //This updates the h1
    pokeName.innerText = pokeData.name;
    //This creates a div.card with an image and name underneath
    pokeDiv.innerHTML += `<div onclick="this.remove()" class= "card">
    <img src='${pokeData.sprites.front_default}'>

    <p class=name>${pokeData.name}</p>
    </div>`
};

async function randomPokemon(){

    let pokeTotal = 1279;
    let randomID = Math.round(Math.random() * pokeTotal);

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomID);
    console.log(response);

    let pokeData = await response.json();
    console.log(pokeData);
    //This updates the h1
    pokeName.innerText = pokeData.name;
    //This creates a div.card with an image and name underneath
    pokeDiv.innerHTML += `<div onclick="this.remove()" class= "card">
    <img src='${pokeData.sprites.front_default}'>
    <p class=name>${pokeData.name}</p>

    </div>`
};













