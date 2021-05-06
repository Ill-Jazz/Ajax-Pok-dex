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


//declaring and assigning variables
const buttonName = document.querySelector("#nameBtn");
const buttonId = document.querySelector("#idBtn");




//getting data from the API
async function getApi() {
    const id = document.querySelector("#idBtn").value;
    const name = document.querySelector("#nameBtn").value;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id || name}`);
    let data = await response.json(); // parsing data to json text format
    console.log(data);
}


































