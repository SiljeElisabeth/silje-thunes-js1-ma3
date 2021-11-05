const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=a2bd8849060843a898e179ba374f1069";
const corsFix = "https://noroffcors.herokuapp.com/" + url;
const gameContainer = document.querySelector(".container");

const apiHeader= { "headers": {
    "x-rapidapi-key": "a2bd8849060843a898e179ba374f1069",
}};

async function makeApiCall() {
    try { 
        const response = await fetch(corsFix , apiHeader);
        const results = await response.json();
        
        const gameInfo = results.results;

        gameContainer.innerHTML = "";

        for(let i = 0; i < gameInfo.length; i++) {
            const gameName = gameInfo[i].name;
            const gameRating = gameInfo[i].rating;
            const gameTags = gameInfo[i].tags.length;

            if(i === 8) {
                break;
            }
            gameContainer.innerHTML += `<div class="games"><p>Name:</p>${gameName} <p>Rating:</p>${gameRating}<p>Amount of tags</p>${gameTags}</div>`
        }
    } catch(error) {
        console.log(error);
        gameContainer.innerHTML = `<p class="error">An error occured! ${error}</p>`;
    }
}

makeApiCall();