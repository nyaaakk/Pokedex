"use strict";

window.onload = init;

let getAllPokemon = async() => {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
    return await response.json();
};

let getPokemon = async(noPokemon) => {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${noPokemon}/`);
    return await response.json();
}

async function getPokeList(){
    let listPokemon = getAllPokemon();

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
    let imgPoke = document.getElementById("main-image");
    let iconPoke = document.getElementById("poke-icon");
    let nomPoke = document.getElementById("poke-title");
    let taillePoke = document.getElementById("poke-height");
    let poidsPoke = document.getElementById("poke-weight");
    let typePoke = document.getElementById("poke-types");
    let hpPoke = document.getElementById("hp");
    let attPoke = document.getElementById("att");
    let defPoke = document.getElementById("def");
    let spePoke = document.getElementById("spe");
    let resPoke = document.getElementById("res");
    let spdPoke = document.getElementById("spd");
    typePoke.innerHTML = "";

    pokemon.then((result) => {

        imgPoke.src = `assets/poke-img/${noPokemon}.png`;
        iconPoke.src = `assets/poke-icons/${noPokemon}.png`;
        nomPoke.innerHTML = `#${noPokemon} - ${result.name}`;
        taillePoke.innerHTML = `${result.height/10} m`;
        poidsPoke.innerHTML = `${result.weight/10} kg`;

        result.types.forEach(element => {
            let imgType = document.createElement("img");
            imgType.src = `assets/poke-types/${element.type.name}.gif`;
            typePoke.appendChild(imgType);
        });

        result.stats.forEach(element => {
            hpPoke.setAttribute("style", `width: ${result.stats[0].base_stat}px`);
            hpPoke.innerHTML = `${result.stats[0].base_stat}`;

            attPoke.setAttribute("style", `width: ${result.stats[1].base_stat}px`);
            attPoke.innerHTML = `${result.stats[1].base_stat}`;

            defPoke.setAttribute("style", `width: ${result.stats[2].base_stat}px`);
            defPoke.innerHTML = `${result.stats[2].base_stat}`;

            spePoke.setAttribute("style", `width: ${result.stats[3].base_stat}px`);
            spePoke.innerHTML = `${result.stats[3].base_stat}`;

            resPoke.setAttribute("style", `width: ${result.stats[4].base_stat}px`);
            resPoke.innerHTML = `${result.stats[4].base_stat}`;

            spdPoke.setAttribute("style", `width: ${result.stats[5].base_stat}px`);
            spdPoke.innerHTML = `${result.stats[5].base_stat}`;
        });

    });

};

async function init(){
    getPokeList();
    getPokeInfo(1);
};

async function showLogin(){
    document.getElementById('login-modal').style.display = 'block';
};

async function closeLogin(){
  document.getElementById('login-modal').style.display = 'none';
};