axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(function (resp) {
        const pokemonList = document.getElementById("pokemon-list");
        const pokemonArray = resp.data.results;
        pokemonArray.forEach((pokemon) => {
            const item = document.createElement("li");
            item.innerHTML = pokemon.name;
            item.classList.add("list-group-item");
            item.addEventListener("click", function () {
                axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    .then(function (resp) {
                        const dettagli = resp.data;
                        console.log(dettagli);

                        const cardElem = document.querySelector('.card');
                        cardElem.innerHTML = `
                            <img class="card-image w-25" src="${dettagli.sprites.front_default}" alt="" />
                            <div class="card-body">
                                <h2>${dettagli.name}</h2>
                                <p>Peso: ${dettagli.weight}</p>
                            </div>
                        `;
                    });
            });
            pokemonList.append(item);
        });
    });