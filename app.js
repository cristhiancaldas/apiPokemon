const pokedex = document.getElementById('pokedex');

const funcionPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 50; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            id: result.id,
            weight:result.weight,
            height:result.height
        }));
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const HTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <a style='cursor: pointer;' onClick="muestra_oculta(${pokeman.id})" title="" class="boton_mostrar">Mostrar Detalles/Ocultar Detalles </a>
            <div id=${pokeman.id} style="display: none;">
             <img class="card-image" src="${pokeman.image}"/>
             <p class="card-subtitle">Nombre: ${pokeman.name}</p>
             <p class="card-subtitle">Peso: ${pokeman.weight}</p>
             <p class="card-subtitle">Altura: ${pokeman.height}</p>
        </div>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = HTMLString;
};
function muestra_oculta(id){
    if (document.getElementById){
    var el = document.getElementById(id); 
    el.style.display = (el.style.display == 'none') ? 'block' : 'none'; 
    }
    }
    window.onload = function(){
    muestra_oculta('contenido');
    }
    funcionPokemon();

