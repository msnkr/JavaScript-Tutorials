// https://pokeapi.co/api/v2/pokemon/${number}

let pokemonName = document.getElementById("pokemon-title");
let pokemonImage = document.getElementById("pokemon-image");
let pokemonType = document.getElementById("pokemon-type");
let container = document.getElementById("pokemon-container")
let pokemonData = [];

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