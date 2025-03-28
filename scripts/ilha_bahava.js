const textos = [


    `<strong>População:</strong><br>
    A ilha de Bahava é <span class="civilizada">civilizada</span>: tanto os <span class="tipo homem">homens</span> como as <span class="tipo mulher">mulheres</span> podem ser cavaleiros, escudeiros ou normais.`,

    `<span class="cavaleiros">Cavaleiros</span> dizem sempre a verdade.<br>
    <span class="escudeiros">Escudeiros</span> mentem sempre.<br>
    <span class="normais">Normais</span> dizem a verdade às vezes e mentem outras vezes.`,

    ` Uma vez, uma antiga imperatriz de Bahava, num bizarro momento, 
    <br>assinou um decreto estipulando que :<br>
    <span class="lei">Cavaleiros só podem casar com escudeiros, e escudeiros com cavaleiros.</span><br>
    <span class="lei">Normais só podem casar com normais.</span>`,

    ` <strong>A BASE DE CONHECIMENTO É:</strong><br>
    A ilha de Bahava é <span class="civilizada">civilizada</span>: tanto os <span class="tipo homem">homens</span> como as <span class="tipo mulher">mulheres</span> podem ser cavaleiros, escudeiros ou normais.
    <span class="cavaleiros">Cavaleiros</span> dizem sempre a verdade.<br>
    <span class="escudeiros">Escudeiros</span> mentem sempre.<br>
    <span class="normais">Normais</span> dizem a verdade às vezes e mentem outras vezes.
    <span class="lei">Cavaleiros só podem casar com escudeiros, e escudeiros com cavaleiros.</span><br>
    <span class="lei">Normais só podem casar com normais.</span>`,

    ` <strong>A BASE DE CONHECIMENTO É:</strong><br>
    A ilha de Bahava é <span class="civilizada">civilizada</span>: tanto os <span class="tipo homem">homens</span> como as <span class="tipo mulher">mulheres</span> podem ser cavaleiros, escudeiros ou normais.
    <span class="cavaleiros">Cavaleiros</span> dizem sempre a verdade.<br>
    <span class="escudeiros">Escudeiros</span> mentem sempre.<br>
    <span class="normais">Normais</span> dizem a verdade às vezes e mentem outras vezes.
    <span class="lei">Cavaleiros só podem casar com escudeiros, e escudeiros com cavaleiros.</span><br>
    <span class="lei">Normais só podem casar com normais.</span>`
];

const imagens = [
      , // "../assets/images/ilhaBahava0.png"
    ,  // "../assets/images/ilhaBahava2.png"
    "../assets/images/ilhaBahava3.png",
   
];
const personagensEsquerda1 = [
    "../assets/images/personagem10.png",
    "../assets/images/personagem11.png",
    "../assets/images/personagem12.png",
    "../assets/images/personagem13.png",
    "../assets/images/personagem14.png"
];
const personagensEsquerda2 = [
    "../assets/images/personagem20.png",
    "../assets/images/personagem2.png",
    "../assets/images/personagem2.png",
     "../assets/images/personagem23.png",
    "../assets/images/personagem23.png"
];

const personagensDireita1 = [
    "../assets/images/personagem30.png",
    "../assets/images/personagem30.png",
    "../assets/images/personagem30.png",
    "../assets/images/personagem30.png",
    "../assets/images/personagem30.png"
];

const personagensDireita2 = [
    "../assets/images/personagem40.png",
    "../assets/images/personagem40.png",
    "../assets/images/personagem40.png",
    "../assets/images/personagem40.png",
    "../assets/images/personagem40.png"
];

const falasEsquerda1 = [
    "Bem-vindo à Ilha de Bahava!",
    "Somos civilizados, claro!",
    "A lei matrimonial é sagrada!",
    "   ....   ",
    "Tu é que não és normal !"
];

const falasEsquerda2 = [
    "Olá, jovem!",
    "Nem sempre dizemos a verdade...",
    "Escudeiros só casam com cavaleiros!",
    "Tu não és uma Normal !",
    "  ...  "
];


let indiceAtual = 0;

function atualizarConteudo() {
    document.getElementById("texto-container").innerHTML = textos[indiceAtual];
    
    document.getElementById("imagem").src = imagens[indiceAtual];
    const imagemEl = document.getElementById("imagem");
    const caminhoImagem = imagens[indiceAtual];
    if (caminhoImagem && caminhoImagem.trim() !== "") {
        imagemEl.style.display = "block";
        imagemEl.src = caminhoImagem;
    } else {
        imagemEl.style.display = "none"; // oculta se estiver vazia ou inválido
    }

    document.getElementById("personagemEsquerda1").src = personagensEsquerda1[indiceAtual];
    document.getElementById("personagemEsquerda2").src = personagensEsquerda2[indiceAtual];
    document.getElementById("personagemDireita1").src = personagensDireita1[indiceAtual];
    document.getElementById("personagemDireita2").src = personagensDireita2[indiceAtual];
    document.getElementById("falaEsquerda1").textContent = falasEsquerda1[indiceAtual];
    document.getElementById("falaEsquerda2").textContent = falasEsquerda2[indiceAtual];
    document.getElementById("falaDireita1").textContent = falasDireita1[indiceAtual];
    document.getElementById("falaDireita2").textContent = falasDireita2[indiceAtual];
}

function mostrarProxima() {
    indiceAtual = (indiceAtual + 1) % textos.length;
    atualizarConteudo();
}

function mostrarAnterior() {
    indiceAtual = (indiceAtual - 1 + textos.length) % textos.length;
    atualizarConteudo();
}

window.onload = () => {
    atualizarConteudo();
};
