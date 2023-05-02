let pokemonName = document.getElementById("pokemon-title");
let pokemonImage = document.getElementById("pokemon-image");
let pokemonType = document.getElementById("pokemon-type");
let container = document.getElementById("pokemon-container");
let modal = document.getElementById("modal");

let singleName = document.getElementById("modal-name");
let singleImage = document.getElementById("modal-image");

let ulModalStat = document.getElementById("modal-stat");
let ulModalBaseStat = document.getElementById("modal-base-stat");
let searchName = document.getElementById("search-pokemon");
let searchBtn = document.getElementById("search-btn");
let pokemonData = [];

// FUNCTIONS
// Get searched pokemons
async function callSearchedPokemon(searchValue) {
    searchName.innerHTML = "";

    try {
        let singlePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
        let singlePokemonData = await singlePokemon.json();
        modal.classList.add("active")
        container.classList.add("active")
    
        singleName.innerHTML = singlePokemonData.species.name;
        singleImage.src = singlePokemonData.sprites.front_default;
    } catch (error) {
        console.log("There was an error");
    }
}

// Get the individgual pokemon stats
async function callSinglePokemon(item) {
    let singlePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${item.textContent}`);
    let singlePokemonData = await singlePokemon.json();
    modal.classList.add("active")
    container.classList.add("active")

    singleName.innerHTML = singlePokemonData.species.name;
    singleImage.src = singlePokemonData.sprites.front_default;

    let pokemonStats = singlePokemonData.stats;

    for (let index = 0; index < pokemonStats.length; index++) {
        let statNum = pokemonStats[index].base_stat;
        let statName = pokemonStats[index].stat.name;
        
        // ulModalStat.innerHTML += `<li>${statName}</li>`;
        // ulModalBaseStat.innerHTML += `<li>${statNum}</li>`;
    }
    
}

// Update the dom
function updateDom(image, name, type) {
    let output = document.createElement("div");
    
    output.innerHTML = `<h2 class="title">${name}</h2>
    <img src="${image}" alt="" class="image:">
    <h4 class="type">${type}</h4>`;

    output.classList.add("pokemon")
    container.appendChild(output);
}

// Get one single pokemon and add to the dom
function getSinglePokemon(data) {
    data.forEach(element => {
        let image = element.sprites.front_default;
        let name = element.species.name;
        let type = element.types[0].type["name"];

        updateDom(image, name, type)
    })
}

// Get the List of pokemon
async function getPokemonList() {
    for (let num = 1; num < 152; num++) {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
        const data = await pokemon.json();
        pokemonData.push(data)
    }
    getSinglePokemon(pokemonData)
}

getPokemonList();


// EVENT LISTENERS
container.addEventListener("click", e => {
    if (e.target.classList.contains("title")) {
        ulModalStat.innerHTML = "";
        ulModalBaseStat.innerHTML = "";
        callSinglePokemon(e.target);
    }
})

document.body.addEventListener("click", () => {
    modal.classList.remove("active");
    container.classList.remove("active");
})

searchBtn.addEventListener("click", e => {
    e.preventDefault();

    callSearchedPokemon(searchName.value);
    searchName.value = "";
})