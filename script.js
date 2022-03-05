const outdoor = document.querySelector("#outdoor");
const jogoSelecionado = document.querySelector("#jogo-selecionado");

function abrirJogo() {
    if(!document.querySelector("#pong")) {
        const canvasAntigo = document.querySelector(".jogo");
        if(canvasAntigo) jogoSelecionado.removeChild(canvasAntigo);

        const canvas = document.createElement("canvas");
        canvas.id = "pong"; //Jogo padrão
        canvas.classList = "jogo";
        jogoSelecionado.appendChild(canvas);
    }
}

outdoor.onclick = abrirJogo;