function selecionarJogo(jogo) {
    const urlImgJogo = jogo.getAttribute("src");
    const urlJogo = jogo.dataset.url;
    jogoSelecionado.children[0].children[0].children[0].setAttribute("src", urlImgJogo);
    jogoSelecionado.children[0].children[0].children[1].setAttribute("href", urlJogo);
    jogoSelecionado.children[1].textContent = jogo.dataset.about;
}



const jogoSelecionado = document.querySelector("#jogo-selecionado");
const outrosJogos = document.querySelectorAll(".outro-jogo img");

for(const jogo of outrosJogos) {
    jogo.onclick = (e) => selecionarJogo(e.target);
}