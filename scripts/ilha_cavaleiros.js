
let textos = {};
let falasSmullyan = {};
let falasEsquerda1 = {};
let falasEsquerda2 = {};
let falasCentro = {};
let falasDireita1 = {};
let falasDireita2 = {};
let fundos = {};
let imagens = {};
let imagensDestaque = {};
let personagensSmullyan = {};
let personagensEsquerda1 = {};
let personagensEsquerda2 = {};
let personagensCentro = {};
let personagensDireita1 = {};
let personagensDireita2 = {};

const linguaAtual = localStorage.getItem('linguaEscolhida') || "pt";


fetch(`../linguas/falas_cavaleiros_${linguaAtual}.json`)
  .then(response => response.json())
  .then(data => {
    textos = data.textos;
    falasSmullyan = data.falasSmullyan;
    falasEsquerda1 = data.falasEsquerda1;
    falasEsquerda2 = data.falasEsquerda2;
    falasCentro=data.falasCentro;
    falasDireita1 = data.falasDireita1;
    falasDireita2 = data.falasDireita2;
    fundos = data.fundos;
    imagens = data.imagens;
    imagensDestaque = data.imagensDestaque;
    personagensSmullyan = data.personagensSmullyan;
    personagensEsquerda1 = data.personagensEsquerda1;
    personagensCentro=data.personagensCentro;
    personagensEsquerda2 = data.personagensEsquerda2;
    personagensDireita1 = data.personagensDireita1;
    personagensDireita2 = data.personagensDireita2;

    atualizarConteudo();  // iniciar o jogo já com dados carregados
  })
  .catch(error => console.error('Erro a carregar o json:', error));




/*
const textos = {
    0: `<strong>População:</strong><br>
        A ilha dos Cavaleiros e Escudeiros é composta por 
        <span class="escudeiros">Escudeiros que mentem sempre</span>  e os 
        <span class="cavaleiros">Cavaleiros que dizem sempre a verdade.</span> <br>
        <span class="normais">É impossivel distinguir entre os dois</span> <br>`,
  
    1: " ",
  
    2: `<strong>População:</strong><br>
        A ilha dos Cavaleiros e Escudeiros é composta por 
        <span class="escudeiros">Escudeiros que mentem sempre</span>  e os 
        <span class="cavaleiros">Cavaleiros que dizem sempre a verdade.</span> <br>
        <span class="normais">É impossivel distinguir entre os dois</span> <br>`,
  
    3: `<strong>População:</strong><br>
        A ilha dos Cavaleiros e Escudeiros é composta por 
        <span class="escudeiros">Escudeiros que mentem sempre</span>  e os 
        <span class="cavaleiros">Cavaleiros que dizem sempre a verdade.</span> <br>
        <span class="normais">É impossivel distinguir entre os dois</span> <br>`,
  
    4: " ",
    5: "",
    6: " Temos 3 dias (colunas) em que chove e 8 linhas numa tabela de verdade (2^3=8) ",
    7: "a frase \"nunca choveu\" é apenas verdadeira na última linha",
    8: "",
    9: "",
    10: "",
    11: `<span class="lei">arrasta os blocos para os devidos lugares e <br>
         clica em responder. Podes repetir o questionário<br> quantas vezes quiseres ou clicar <br>
         em 'avançar' para saber a resposta</span>`,
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: `<span class="lei">arrasta os blocos para os devidos lugares e <br>
         clica em responder. Podes repetir o questionário<br> quantas vezes quiseres ou clicar <br>
         em 'avançar' para saber a resposta</span>`,
    22: "",
    23: ""
  };
  
//imagens de panorama
const fundos = {
    0: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    1: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    2: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    3: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    4: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    5: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    6: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    7: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    8: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    9: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    10: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    11: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    12: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    14: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    15: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    16: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    17: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    18: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros2.png",
    19: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    20: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    21: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    22: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    23: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png",
    24: "../assets/images/ilhaCavaleiros/ilhaDosCavaleiros.png"
  };
  

// Mapeia cenas a imagens do contentor à direita (tabelas de verdade)
const imagensDestaque = {
    //2: "../assets/images/ilhaBahava/lex.png",
    6: "../assets/images/ilhaCavaleiros/tbv_exerc2.1.png",
    7: "../assets/images/ilhaCavaleiros/tbv_exerc2.3.png",
    8: "../assets/images/ilhaCavaleiros/tbv_exerc2.2.png",
    //10: "../assets/images/ilhaCavaleiros/tbv_exerc3.1.png"
};

//imagens do container, botões e imagem puzzle
const imagens = {
    0: "",
    1: "",
    2: "../assets/images/ilhaBahava/banner puzzle.png",
    3: "../assets/images/ilhaBahava/banner puzzle.png",
    4: "",
    5: "",
    6: "../assets/images/ilhaBahava/banner puzzle.png",
    7: "../assets/images/ilhaBahava/banner puzzle.png",
    8: "",
    9: "../assets/images/ilhaBahava/banner puzzle.png",
    10: "../assets/images/ilhaBahava/banner puzzle.png",
    11: "../assets/images/ilhaBahava/banner puzzle.png",
    12: "",
    13: "",
    14: "../assets/images/ilhaBahava/banner puzzle.png",
    15: "../assets/images/ilhaBahava/banner puzzle.png",
    16: "",
    17: "../assets/images/ilhaBahava/banner puzzle.png",
    18: "../assets/images/ilhaBahava/banner puzzle.png",
    19: "../assets/images/ilhaBahava/banner puzzle.png",
    20: "../assets/images/ilhaBahava/banner puzzle.png",
    21: "../assets/images/ilhaBahava/banner puzzle.png",
    22: "",
    23: ""
  };
  
  const personagensEsquerda1 = {
    0: "",
    1: "../assets/images/ilhaCavaleiros/p1.1.png",
    2: "../assets/images/ilhaCavaleiros/p1.2.png",
    3: "../assets/images/ilhaCavaleiros/p1.1.png",
    4: "../assets/images/ilhaCavaleiros/p1.1.png",
    5: "../assets/images/ilhaCavaleiros/p1.1.png",
    6: "../assets/images/ilhaCavaleiros/p1.1.png",
    7: "../assets/images/ilhaCavaleiros/p1.1.png",
    8: "../assets/images/ilhaCavaleiros/p1.2.png",
    9: "../assets/images/ilhaCavaleiros/p3.1.png",
    10: "../assets/images/ilhaCavaleiros/p3.1.png",
    11: "../assets/images/ilhaCavaleiros/p3.1.png",
    12: "../assets/images/ilhaCavaleiros/p3.1.png",
    13: "../assets/images/ilhaCavaleiros/p3.1.png",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  
const personagensEsquerda2 = {
    0: "",
    1: "../assets/images/ilhaCavaleiros/p2.1.png",
    2: "../assets/images/ilhaCavaleiros/p2.1.png",
    3: "../assets/images/ilhaCavaleiros/p2.1.png",
    4: "../assets/images/ilhaCavaleiros/p2.1.png",
    5: "../assets/images/ilhaCavaleiros/p2.1.png",
    6: "",
    7: "",
    8: "",
    9: "../assets/images/ilhaCavaleiros/p3.1.png",
    10: "../assets/images/ilhaCavaleiros/p3.1.png",
    11: "../assets/images/ilhaCavaleiros/p3.1.png",
    12: "../assets/images/ilhaCavaleiros/p3.1.png",
    13: "../assets/images/ilhaCavaleiros/p3.1.png",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  

  const personagensDireita1 = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "../assets/images/ilhaCavaleiros/tbv_exerc3.1.png",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  

  const personagensDireita2 = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "../assets/images/ilhaCavaleiros/p3.1.png",
    10: "../assets/images/ilhaCavaleiros/p3.1.png",
    11: "../assets/images/ilhaCavaleiros/p3.1.png",
    12: "../assets/images/ilhaCavaleiros/p3.1.png",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  
  const personagensSmullyan = {
    0: "../assets/images/ilhaBahava/smullyan0.png",
    1: "../assets/images/ilhaBahava/smullyan4.png",
    2: "../assets/images/ilhaBahava/smullyan0.png",
    3: "../assets/images/ilhaBahava/smullyan0.png",
    4: "../assets/images/ilhaBahava/smullyan2.png",
    5: "../assets/images/ilhaBahava/smullyan3.png",
    6: "../assets/images/ilhaBahava/smullyan5.png",
    7: "../assets/images/ilhaBahava/smullyan1.png",
    8: "../assets/images/ilhaBahava/smullyan1.png",
    9: "../assets/images/ilhaBahava/smullyan6.png",
    10: "../assets/images/ilhaBahava/smullyan6.png",
    11: "../assets/images/ilhaBahava/smullyan6.png",
    12: "../assets/images/ilhaBahava/smullyan6.png",
    13: "../assets/images/ilhaBahava/smullyan6.png",
    14: "../assets/images/ilhaBahava/smullyan6.png",
    15: "../assets/images/ilhaBahava/smullyan6.png",
    16: "../assets/images/ilhaBahava/smullyan6.png",
    17: "../assets/images/ilhaBahava/smullyan6.png",
    18: "../assets/images/ilhaBahava/smullyan6.png",
    19: "../assets/images/ilhaBahava/smullyan6.png",
    20: "../assets/images/ilhaBahava/smullyan6.png",
    21: "../assets/images/ilhaBahava/smullyan6.png",
    22: "../assets/images/ilhaBahava/smullyan6.png",
    23: "../assets/images/ilhaBahava/smullyan6.png"
  };
  

  const falasSmullyan = {
    0: "Bem vindos à Ilha dos cavaleiros e escudeiros e é impossivel distinguir qual é qual",
    1: "temos aqui dois habitantes, o Sr. A e o Sr. B",
    2: "",
    3: " O que são A e B? ",
    4: " Suponhamos que A é escudeiro. Nesse caso, a frase «Pelo menos um de nós é escudeiro.» é falsa (uma vez que os escudeiros mentem) e são ambos cavaleiros. Logo, se A for escudeiro, tem de ser simultaneamente cavaleiro, o que é impossível. ",
    5: " Consequentemente, A não é escudeiro; A é cavaleiro. Portanto, a frase dita por A tem de ser verdadeira e pelo menos um dos dois tem de ser escudeiro. Como A é cavaleiro, B tem de ser escudeiro. A é cavaleiro e B é escudeiro.",
    6: " Considere-se as seguintes frases sobre Segunda, Terça e Quarta. \" Nunca choveu.\" e \"  Choveu exactamente num dos 3 dias.",
    7: "que podemos concluir?",
    8: "Não há grande coisa para concluir: Apenas o facto de as frases não poderem ser verdadeiras em simultâneo.",
    9: "Temos três habitantes da ilha, o A , o B e o C",
    10: "",
    11: " O que são A, B e C?",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: " ",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  
  const falasEsquerda1 = {
    0: "",
    1: "",
    2: "Pelo menos um de nós é escudeiro",
    3: "",
    4: "",
    5: "  eu digo sempre a verdade.  ",
    6: "",
    7: "parece-me complicado",
    8: "Não tem graça!",
    9: "",
    10: "Somos todos escudeiros.",
    11: "Somos todos escudeiros.",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  

  const falasEsquerda2 = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "   ",
    7: "",
    8: "",
    9: "",
    10: " Há exactamente um cavaleiro entre nós.",
    11: "Há exactamente um cavaleiro entre nós",
    12: "",
    13: "",
    14: " ",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  

  const falasDireita1 = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: " ",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  

  const falasDireita2 = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
    21: "",
    22: "",
    23: ""
  };
  
*/

let indiceAtual = 0;

function atualizarConteudo() {
    // Altera fundo
    const fundo = fundos[indiceAtual] ?? "";
    document.body.style.backgroundImage = fundo ? `url('${fundo}')` : "none";

    // Texto no container
    const textoEl = document.getElementById("texto-container");
    textoEl.innerHTML = textos[indiceAtual] ?? "";
    if (!textos[indiceAtual] || textos[indiceAtual].trim() === "") {
        textoEl.style.display = "none"; // Esconde se vazio ou só espaços
    } else {
        textoEl.style.display = "block"; // Mostra se tiver texto
    }
    

    // Imagem do container
    const imagemEl = document.getElementById("imagem");
    const caminhoImagem = imagens[indiceAtual] ?? "";
    if (caminhoImagem.trim() !== "") {
        imagemEl.style.display = "block";
        imagemEl.src = caminhoImagem;
    } else {
        imagemEl.style.display = "none";
    }

    // Mostrar imagem da imperatriz apenas na cena 

    const divDestaque = document.getElementById("div-imagem-destaque");
    const imgDestaque = document.getElementById("img-destaque");
    const imagemAtual = imagensDestaque[indiceAtual];
    
    if (imagemAtual) {
        divDestaque.style.display = "block";
        imgDestaque.src = imagemAtual;
    } else {
        divDestaque.style.display = "none";
    }


    // Atualiza personagens (e esconde se vazio)
    const atualizarImagem = (id, src) => {
        const el = document.getElementById(id);
        if (src && src.trim() !== "") {
            el.style.display = "block";
            el.src = src;
        } else {
            el.style.display = "none";
        }
    };

    

    const mostrarBlocos = indiceAtual === 7;

    const blocosEl = document.getElementById("blocos-container");
    const cenarioEl = document.getElementById("cenario");
    const verificarBtn = document.getElementById("verificar");

    if (blocosEl) blocosEl.style.display = mostrarBlocos ? "block" : "none";
    if (cenarioEl) cenarioEl.style.display = mostrarBlocos ? "flex" : "none";
    if (verificarBtn) verificarBtn.style.display = mostrarBlocos ? "inline-block" : "none";

    if (mostrarBlocos && typeof adicionarBlocos === "function") {
        
    }
////////////////////////////////////////////////////

    function atualizarSlotInferior(id, vetor) {
        const el = document.getElementById(id);
        const img = document.createElement("img");
        const src = vetor[indiceAtual] ?? "";
      
        el.innerHTML = ""; // limpa o slot

        console.log("Slot:", id, "Imagem:", src);  // DEBUG para ver na consola
      
        if (src && src.trim() !== "") {
          img.src = src;
          el.appendChild(img);
        }
      }
      
      // Atualiza os slots inferiores
      atualizarSlotInferior("slotEsq1", personagensEsquerda1);
      atualizarSlotInferior("slotEsq2", personagensEsquerda2);
      atualizarSlotInferior("slotVazio", personagensCentro);  // slot central
      atualizarSlotInferior("slotDir1", personagensDireita1);
      atualizarSlotInferior("slotDir2", personagensDireita2);
      atualizarSlotInferior("slotSmullyan", personagensSmullyan);
      
//////////////////////////////////////////////
    


    // Balões de fala
    const atualizarTexto = (id, texto) => {
        const el = document.getElementById(id);
        if (!texto || texto.trim() === "") {
            el.style.display = "none"; // Esconde se vazio ou só espaços
        } else {
            //el.textContent = texto;
            el.innerHTML = texto;

            el.style.display = "block"; // Mostra normalmente quando existe fala
        }

    };
    
    atualizarTexto("falaSmullyan", falasSmullyan[indiceAtual] ?? "");

    atualizarTexto("falaEsquerda1", falasEsquerda1[indiceAtual] ?? "");
    atualizarTexto("falaEsquerda2", falasEsquerda2[indiceAtual] ?? "");
    atualizarTexto("falaCentro", falasCentro[indiceAtual] ?? "");  // slot central
    atualizarTexto("falaDireita1", falasDireita1[indiceAtual] ?? "");
    atualizarTexto("falaDireita2", falasDireita2[indiceAtual] ?? "");

    const visor = document.getElementById("indice-visor");
    if (visor) {
      visor.textContent = `Etapa: ${indiceAtual}`;
    }
    ////////////////////////////////////////////alterar questionarios/////////////////////////////////////

    // CHAMA OS QUESTIONÁRIOS CONSOANTE O ÍNDICE definidos em questionarios.js, deve-se acrescentar if statments para novos questionários 1/3
    if (indiceAtual === 3) {
        iniciarQuestionario("situacao1");
      } 
      else if (indiceAtual === 15) {
        iniciarQuestionario("situacao2");
      } 
      else if (indiceAtual === 23) {
        iniciarQuestionario("situacao3");
      } 
      else if (indiceAtual === 27) {
        iniciarQuestionario("situacao4");
      } 
      else if (indiceAtual === 40) {
        iniciarQuestionario("situacao5");
      } 

      const indicesComSlots = [3, 15, 23, 27, 40]; // actualizar onde aparecem os slots na linha de história 2/3

      if (!indicesComSlots.includes(indiceAtual)) {
        document.querySelectorAll(".slot").forEach(el => el.remove());
        const blocosContainer = document.getElementById("blocos-container");
        if (blocosContainer) blocosContainer.innerHTML = "";
      }
      
     
    // O valor de indiceAtual é o dos questionários ?, actualizar em conformidade com o 2/3 , 3/3
    document.getElementById("verificar").style.display = [3, 15, 23, 27, 40].includes(indiceAtual)
      ? "block"
      : "none";

      /////////////////////////////////////////// fim de alterar questionáros///////////////////////////////////
    
}

function mostrarProxima() {
    indiceAtual = (indiceAtual + 1) % Object.keys(textos).length;

    atualizarConteudo();
}

function mostrarAnterior() {
    indiceAtual = (indiceAtual - 1 + Object.keys(textos).length) % Object.keys(textos).length;

    atualizarConteudo();
}

window.onload = () => {
    atualizarConteudo();
};
