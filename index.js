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