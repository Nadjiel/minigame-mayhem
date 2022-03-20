const about = document.getElementById("about");
const keysButton = document.getElementById("keys-button");
const rankingButton = document.getElementById("ranking-button");
const keysTutorial = document.getElementById("keys");
const rankingEl = document.getElementById("ranking");

keysButton.onclick = () => {
    about.removeChild(rankingEl);

    if(!document.querySelector("#keys")) about.appendChild(keysTutorial);
}

rankingButton.onclick = () => {
    about.removeChild(keysTutorial);

    if(!document.querySelector("#ranking")) about.appendChild(rankingEl);
}

keysButton.onclick();