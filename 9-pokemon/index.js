const getPokemonEffect = () => {
    const url = " https://pokeapi.co/api/v2/pokemon/ditto";
    const res = new XMLHttpRequest();
    res.open("GET", url);
    res.send();

    res.addEventListener("load", () => {
        const pokemon = JSON.parse(res.responseText);
        const abilityUrl = pokemon.abilities[0].ability.url;

        const res2 = new XMLHttpRequest();
        res2.open("GET", abilityUrl);
        res2.send();

        res2.addEventListener("load", () => {
            const ability = JSON.parse(res2.responseText);
            console.log(ability.effect_entries.filter(elem => elem.language.name === "en")[0].effect);
        })
    })
}
getPokemonEffect();