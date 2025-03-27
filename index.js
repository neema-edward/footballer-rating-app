const baseURL = "http://localhost:3000/players";

const playerName = document.getElementById("p-name");
const playerClub = document.getElementById("p-current-club");
const playerPace = document.getElementById("p-pace");
const playerShooting = document.getElementById("p-shooting");
const playerPassing = document.getElementById("p-passing");
const playerDribbling = document.getElementById("p-dribbling");
const playerDefence = document.getElementById("p-defence");
const playerPhysical = document.getElementById("p-physical");
const playerRating = document.getElementById("p-rating");
const playerImage = document.getElementById("im1");
const form = document.getElementById("rates-form");

let players = [];
let currentPlayer = 0;

function showPlayer() {
    let player = players[currentPlayer];
}

playerName.textContent = player["Player's Full Name"];
playerClub.textContent = player["Player's Current Club"];
playerPace.textContent = "Pace: " + player.Pace;
playerShooting.textContent = "Shooting: " + player.Shooting;
playerPassing.textContent = "Passing: " + player.Passing;
playerDribbling.textContent = "Dribbling: " + player.Dribbling;
playerDefence.textContent = "Defence: " + player.Defence;
playerPhysical.textContent = "Physical: " + player.Physical;

playerImage.src = player["Player's Image"];

let total = player.Pace + player.Shooting + player.Passing + player.Dribbling + player.Defence + player.Physical;
let rating = Math.round(total/6)
playerRating.textContent = rating;

console.log("Showing player:". player)

form.addEventListener("submit", function (event) {
    event.preventDefault();
    let newPlayer = {
        id: players.length + 1,
        "Player's Full Name": document.getElementById("pname").value,
        "Player's Current Club": document.getElementById("cclub").value,
        "Player's Image": document.getElementById("pimage"),
        Pace: Number(document.getElementById("pac").value),
        Shooting: Number(document.getElementById("sho").value),
        Passing: Number(document.getElementById("pas").value),
        Dribbling: Number(document.getElementById("dri").value),
        Defence: Number(document.getElementById("def").value),
        Physical: Number(document.getElementById("phy").value),
    };
    fetch(baseURL, {
        method: "POST",
        headers: { "Content-Type": "appliation/json" },
        body: JSON.stringify(newPlayer),
    })
    .then((response) => response.json())
    .then((player) => {
        players.push(player);
        currentPlayer = players.length -1;
        showPlayer();
        form.reset();
    });
});

