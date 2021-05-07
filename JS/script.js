/*
Make a Pokédex using this API.

Basic functionality that is expected (read: core features):

You can search a pokémon by name and by ID
Of said pokémon you need to show:
The ID-number
An image (sprite)
At least 4 "moves"
The previous evolution, only if it exists, along with their name and image.
Be carefull, you cannot just do ID-1 to get the previous form, for example look into "magmar" - "magmortar". You have to use a seperate api call for this!
Make your web page look like a pokédex by adding a little CSS.

Note: For this exercise, the goal is to keep working on it, until the deadline is reached.
If you are finished adding all "core features", look at what else the API has to offer, and try adding some other features.
At the end of the deadline, everyone is going to present the pokédex they made; As such it is important that you have published your web page on GitHub!

Extra challenge
There are a couple of pokemon that don't play with the normal rules, add code so their cases are also handled elegantly.

Ditto only has 1 move.
Eevee has 6 evolutions.
 */

(() => {


//declaring and assigning variables
    const buttonName = document.querySelector("#nameBtn");
    buttonName.addEventListener("click", searchName);
    const pokemonName =document.querySelector("#pokeName");
    const pokemonImg = document.querySelector("#pokeImg")



    //function for name searchbox
    function searchName() {
        const nameValue = document.querySelector("#input-name").value;
    //getting data from the pokeAPI
        async function getName(value) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
            const data = await response.json(); // parsing data to json text format
            pokemonName.innerHTML = data.name + " <br> " + data.id;
            pokemonImg.src = data.sprites.front_default;
            //console.log(data)
        }

        getName(nameValue);

    }


/*.then(function (result) {
result = result [0];
let tempCopy = template.content.cloneNode(true); //cloning html
tempCopy.querySelector(".name").innerHTML = result.name;
tempCopy.querySelector(".alter-ego").innerHTML = result.alterEgo;
tempCopy.querySelector(".powers").innerHTML = result.abilities;
target.appendChild(tempCopy);
})
}

*/


})();




























