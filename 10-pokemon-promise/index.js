const getPokemonEffect = () => {
    const url = " https://pokeapi.co/api/v2/pokemon/ditto";
    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Could not find pokemon ${res.status}`);
            }
            return res.json()
        })
        .then(data => {
            const abilityUrl = data.abilities[0].ability.url;
            return fetch(abilityUrl);
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Could not find ability ${res.status}`);
            }
            return res.json()
        })
        .then(data => {
            console.log(data.effect_entries.filter(elem => elem.language.name === "en")[0].effect);
        })
        .catch(err => {
            console.error(err.message);
        })
}
getPokemonEffect();