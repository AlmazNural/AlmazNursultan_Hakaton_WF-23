const pokemon = document.querySelector("#listPokemon")
const btnHeader = document.querySelectorAll(".btn-header")
// __API pokemon__
let URL = "https://pokeapi.co/api/v2/pokemon/"

// ___async aw___ ____for-fetch_____
for (let i = 1; i <=151; i++){
    fetch ("https://pokeapi.co/api/v2/pokemon/" + i)
    .then((res) => res.json())
    .then(data => monstrPokemon(data))
}

const monstrPokemon = async(pok) => {

    let tipos = pok.types.map((type) => `<p class="${type.type.name} tipo">${type.type.name}</p>`)
    const div = document.createElement("div")
    pokemon.appendChild(div)
    div.classList.add("pokemon")
    div.innerHTML = `
    <p class="pokemon-id-back">#${pok.id}</p>
    <div class="pokemon-imagen">
        <img src="${pok.sprites.other["official-artwork"].front_default}" alt=${pok.name}>
    </div>
    <div class="pokemon-info">
        <div class="nombre-contenedor">
            <p class="pokemon-id">#${pok.id}</p>
            <h2 class="pokemon-nombre">${pok.name}</h2>
        </div>
        <div class="pokemon-tips">
        ${tipos}
        </div>
        <div class="pokemon-stats">
            <p class="stat">${pok.height} m</p>
            <p class="stat">${pok.weight} kg</p>
        </div>
    </div>`;
}

btnHeader.forEach(btn => btn.addEventListener("click", (event) =>{
    const btnId = event.currentTarget.id

    pokemon.innerHTML = "";

    for (let i = 1; i <=151; i++){
        fetch (URL + i)
        .then((res) => res.json())
        .then(data => {

            if(btnId === "all"){
                monstrPokemon(data)
            }else{
                const tipos = data.types.map(type => type.type.name)
                if(tipos.some(tip => tip.includes(btnId))) {
                    monstrPokemon(data)
                }
            }
        })
    }
})) 
