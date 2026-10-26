const games = [
    {
        title: "Kick the Zombie: Ragdoll Sandbox",
        thumbnail: "https://img.gamemonetize.com/thc5u1mml88ak50zkb2atfzxc127itzr/512x384.jpg",
        url: "https://html5.gamemonetize.co/thc5u1mml88ak50zkb2atfzxc127itzr/"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const gamesGrid = document.getElementById("gamesGrid");
    
    if (gamesGrid) {
        gamesGrid.innerHTML = "";
        games.forEach(game => {
            const gameCard = document.createElement("div");
            gameCard.className = "game-card";
            gameCard.style.cssText = "background: #151b2b; border-radius: 10px; overflow: hidden; text-align: center; padding-bottom: 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); margin-bottom: 15px;";
            
            gameCard.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}" style="width: 100%; height: 180px; object-fit: cover;">
                <h3 style="color: #fff; font-size: 16px; margin: 10px 5px; padding: 0 10px;">${game.title}</h3>
                <a href="${game.url}" target="_blank" style="display: inline-block; background: #00d2ff; color: #000; padding: 8px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; margin-top: 5px;">Play Now</a>
            `;
            
            gamesGrid.appendChild(gameCard);
        });
    }
});
