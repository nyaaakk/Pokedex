"use strict";

window.onload = init;

let getApiData = async() => {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    return await response.json();
};

let getPokemon = async(noPokemon) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${noPokemon}/`);
    return await response.json();
}

async function getPokeList(){
    let listPokemon = getApiData();

    listPokemon.then((result) => {
        let pokeList = document.getElementById("poke-list");

        for( let i = 0; i < 151; i++ ){
            let option = document.createElement("li");
            let imgPoke = document.createElement("img");

            imgPoke.src = `assets/poke-icons/${i+1}.png`;
            option.setAttribute("onclick", `getPokeInfo(${i+1})`);
            option.innerHTML = `${i+1} - ${result.results[i].name}`;
            option.appendChild(imgPoke);
            pokeList.appendChild(option);
        }

    });

};

async function getPokeInfo(noPokemon){
    let pokemon = getPokemon(noPokemon);
}

function init(){
    getPokeList();
};