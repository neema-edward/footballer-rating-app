const baseURL = "http://localhost:3000/players";

const playerMenu = document.getElementById('player-menu');

function displayPlayers() {
    for(let a of players){
        let createdImage = document.createElement('img');
        createdImage.src = a.image;
        createdImage.alt = a.name;
        createdImage.classList.add('image-container');         
        
        
        playerMenu.appendChild(createdImage);
    }
}

displayPlayers();