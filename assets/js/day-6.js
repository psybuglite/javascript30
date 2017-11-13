const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const cities = [];

fetch(endpoint)
    .then(chunk => chunk.json())
    .then(data => cities.push(...data))


function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //figure out what to match
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
}

function add_commas(numStr) {
    return numStr.split('').reverse().join('').replace(/(\d{3})(?=[^$|^-])/g, "$1,").split('').reverse().join('');
}

function displayMatches() {
    //console.log(this.value);
    const matchArray = findMatches(this.value, cities);
    //console.log(matchArray);
    const html = matchArray.map(place => {
        const regex2 = new RegExp(this.value, "gi");
        const cityname = place.city.replace(regex2, `<span class="hl">${this.value}</span>`);
        const statename = place.state.replace(regex2, `<span class="hl">${this.value}</span>`)
        return `
        <li>
          <span class="name">${cityname}, ${statename}</span>
          <span class="population">${add_commas(place.population)}</span>
        </li>
      `
    }).join();
    suggestions.innerHTML = html;
}

const search = document.querySelector(".search");
console.log(search);
const suggestions = document.querySelector(".suggestions");

search.addEventListener("change", displayMatches);
search.addEventListener("keyup", displayMatches);