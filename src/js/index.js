const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoTrocaTema = document.querySelector("#botao-alterar-tema img");
const body = document.querySelector("body");

botaoAlterarTema.addEventListener("click", () => {

    const noite = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

    if (noite) {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
})