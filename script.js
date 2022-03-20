function selectGame(game) {
    const gameName = game.dataset.name;
    const urlImgGame = game.getAttribute("src");
    const urlGame = game.dataset.url;
    selectedGame.children[0].children[0].children[0].setAttribute("src", urlImgGame);
    selectedGame.children[0].children[0].children[1].setAttribute("href", urlGame);
    selectedGame.children[1].textContent = game.dataset.about;
    selectedGame.children[0].children[1].textContent = gameName;
}



const selectedGame = document.querySelector("#jogo-selecionado");
const otherGames = document.querySelectorAll(".outro-jogo img");

for(const game of otherGames) {
    game.onclick = (e) => selectGame(e.target);
}