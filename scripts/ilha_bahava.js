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
    <span class="lei">Normais só podem casar com normais.</span>`,
    
    ` `, //6
    ` `, //7
    ``, //8
    ``,  //9
    ``,  //10
    ``, //11
    ``, //12
    ``, //13
    ``, //14
    "", //15
    "", //16
    "", //17
    "", //18
    "", //19
    "", //20
    ""

    

    
];
//imagens de panorama
const fundos = [
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  // 0 primeiro fundo sem personagens
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //1
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //2
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //3
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //4
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //5
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //6
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //7
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //8
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //9
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //10
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //11
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //12
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //14
    "../assets/images/ilhaBahava/ilhaDeBahava0.png",  //15
    "../assets/images/ilhaBahava/ilhaDeBahava0.png", //16
    "../assets/images/ilhaBahava/ilhaDeBahava0.png", //17
    "../assets/images/ilhaBahava/ilhaDeBahava0.png", //18
    "../assets/images/ilhaBahava/ilhaDeBahava0.png", //19
    "../assets/images/ilhaBahava/ilhaDeBahava0.png", //20
    "../assets/images/ilhaBahava/ilhaDeBahava0.png" //21
];

//imagens do container
const imagens = [
    "", //0
    "", //1
    "../assets/images/ilhaBahava3.png",//2
    "", //3
    "",  //4
    "", //5
    "", //6
    "", //7
    "", //8
    "",//9
    "",//10
    "", //11
    "",//12
    "",//13
    "", //14
    "", //15
    "", //16
    "", //17
    "", //18
    "", //19
    "" //20
];
const personagensEsquerda1 = [
    "", //0
    "", //1
    "../assets/images/ilhaBahava/personagem10.png", //2
    "../assets/images/ilhaBahava/personagem11.png", //3
    "../assets/images/ilhaBahava/personagem12.png", //4
    "../assets/images/ilhaBahava/personagem13.png", //5
    "../assets/images/ilhaBahava/personagem14.png", //6
    "../assets/images/ilhaBahava/personagem15.png", //7
    "../assets/images/ilhaBahava/personagem15.png", //8
    "../assets/images/ilhaBahava/personagem60.png", //9
    "../assets/images/ilhaBahava/personagem60.png", //10
    "../assets/images/ilhaBahava/personagem60.png", //11
    "../assets/images/ilhaBahava/personagem60.png", //12
    "", //13
    "", //14
    "", //15
    "", //16
    "../assets/images/ilhaBahava/personagem90.png", //17
    "../assets/images/ilhaBahava/personagem90.png", //18
    "../assets/images/ilhaBahava/personagem90.png", //19
    "../assets/images/ilhaBahava/personagem90.png" //20

];
const personagensEsquerda2 = [
    "", //0
    "", //1
    "../assets/images/ilhaBahava/personagem20.png", //2
    "../assets/images/ilhaBahava/personagem21.png", //3
    "../assets/images/ilhaBahava/personagem21.png", //4
    "../assets/images/ilhaBahava/personagem22.png", //5
    "../assets/images/ilhaBahava/personagem22.png", //6
    "../assets/images/ilhaBahava/personagem23.png", //7
    "../assets/images/ilhaBahava/personagem23.png", //8
    "../assets/images/ilhaBahava/personagem51.png", //9
    "../assets/images/ilhaBahava/personagem51.png", //10
    "../assets/images/ilhaBahava/personagem51.png", //11
    "../assets/images/ilhaBahava/personagem51.png", //12
    "../assets/images/ilhaBahava/personagem70.png", //13
    "../assets/images/ilhaBahava/personagem71.png", //14
    "../assets/images/ilhaBahava/personagem72.png", //15
    "../assets/images/ilhaBahava/personagem70.png", //16
    "../assets/images/ilhaBahava/personagem100.png", //17
    "../assets/images/ilhaBahava/personagem101.png", //18
    "../assets/images/ilhaBahava/personagem100.png", //19
    "../assets/images/ilhaBahava/personagem100.png" //20

];

const personagensDireita1 = [
    "", //0
    "", //1
    "", //2
    "../assets/images/ilhaBahava/personagem30.png", //3
    "../assets/images/ilhaBahava/personagem30.png", //4
    "../assets/images/ilhaBahava/personagem30.png", //5
    "../assets/images/ilhaBahava/personagem30.png", //6
    "../assets/images/ilhaBahava/personagem30.png", //7
    "../assets/images/ilhaBahava/personagem30.png", //8
    "../assets/images/ilhaBahava/personagem30.png", //9
    "../assets/images/ilhaBahava/personagem30.png", //10
    "../assets/images/ilhaBahava/personagem30.png", //11
    "../assets/images/ilhaBahava/personagem30.png", //12
    "../assets/images/ilhaBahava/personagem80.png", //13
    "../assets/images/ilhaBahava/personagem81.png", //14
    "../assets/images/ilhaBahava/personagem81.png", //15
    "../assets/images/ilhaBahava/personagem80.png", //16
    "../assets/images/ilhaBahava/personagem110.png", //17
    "../assets/images/ilhaBahava/personagem111.png", //18
    "../assets/images/ilhaBahava/personagem111.png", //19
    "../assets/images/ilhaBahava/personagem111.png" //20
];

const personagensDireita2 = [
    "", //0
    "", //1
    "", //2
    "../assets/images/ilhaBahava/personagem40.png", //3
    "../assets/images/ilhaBahava/personagem40.png", //4
    "../assets/images/ilhaBahava/personagem40.png", //5 
    "../assets/images/ilhaBahava/personagem40.png", //6
    "../assets/images/ilhaBahava/personagem40.png", //7
    "../assets/images/ilhaBahava/personagem40.png", //8
    "../assets/images/ilhaBahava/personagem40.png", //9
    "../assets/images/ilhaBahava/personagem40.png", //10
    "../assets/images/ilhaBahava/personagem40.png", //11
    "../assets/images/ilhaBahava/personagem40.png", //12
    "", //13
    "", //14
    "", //15
    "", //16
    "", //17
    "", //18
    "", //19
    "" //20
]; 

const personagensSmullyan = [
    "../assets/images/ilhaBahava/smullyan0.png", //0
    "../assets/images/ilhaBahava/smullyan4.png", //1
    "../assets/images/ilhaBahava/smullyan0.png", //2
    "../assets/images/ilhaBahava/smullyan0.png", //3
    "../assets/images/ilhaBahava/smullyan2.png",//4
    "../assets/images/ilhaBahava/smullyan3.png",//5
    "../assets/images/ilhaBahava/smullyan5.png",//6
    "../assets/images/ilhaBahava/smullyan1.png",//7
    "../assets/images/ilhaBahava/smullyan1.png",//8
    "../assets/images/ilhaBahava/smullyan6.png",  //9
    "../assets/images/ilhaBahava/smullyan6.png",  //10
    "../assets/images/ilhaBahava/smullyan6.png",  //11
    "../assets/images/ilhaBahava/smullyan6.png",  //12
    "../assets/images/ilhaBahava/smullyan6.png",  //13
    "../assets/images/ilhaBahava/smullyan6.png",  //14
    "../assets/images/ilhaBahava/smullyan6.png", //15
    "../assets/images/ilhaBahava/smullyan6.png", //16
    "../assets/images/ilhaBahava/smullyan6.png", //17
    "../assets/images/ilhaBahava/smullyan6.png", //18
    "../assets/images/ilhaBahava/smullyan6.png", //19
    "../assets/images/ilhaBahava/smullyan6.png" //20
];

const falasSmullyan = [
    "",   //0
    "",   //1
    "",//2
    "Temos o Sr. A e a Sra. A , aqui ao lado",//3
    "um deles poderá mentir, ou ambos, ou nenhum", //4
    "", //5
    "",  //6
    `serão eles escudeiros, cavaleiros ou normais? \n arrasta os blocos
    com o rato e descobre a verdade`,  //7
    `O Sr. A não pode ser escudeiro porque a sua mulher teria de ser cavaleira e, portanto, não 
         normal, e a frase dita por ele seria verdadeira.
           Da mesma forma, a Sra. A não pode ser escudeira. Igualmente, nenhum dos dois pode ser
           cavaleiro (ou o companheiro seria escudeiro), logo são ambos normais (e estão a mentir)`, //8
    `agora temos a situação 21, temos \n  a Sra. A, o Sr. A, a Sra. B e o Sr. B` ,//9
    "", //10
    "O que são, cada um destes habitantes? ",  //11
    `A Sra. B tem de ser normal, uma vez que, se fosse cavaleira, o seu marido seria escudeiro e ela teria mentido. Se ela fosse escudeira,  
    o seu marido seria cavaleiro e ela teria dito a verdade. A Sra. B é normal e, portanto, o Sr. B também é normal.`, //12
    "Podemos então prosseguir para a Situação 22",  //13
    "",  //14
    "O que são eles? Escudeiros, Normais, ou Cavaleiros?", //15
    "", //16
    ` Situação 23: Para haver um casamento, tem de haver amor correspondido.Além disso, 
    um habitante não pode amar mais do que uma pessoa ao mesmo tempo`, //17
    ` Eis três habitantes. Um deles é
 cavaleiro, outro é escudeiro, e
 o terceiro é normal`, //18
    "", //19
    "Duas destas pessoas casaram. quem? " //20
    
];

const falasEsquerda1 = [
    "",  //0
    "",  //1
    "Bem-vindo à Ilha de Bahava!",  //2
    "Somos civilizados, claro!",  //3
    "A lei matrimonial é sagrada!", //4
    "  ......  ", //5
    "Tu é que não és normal !", //6
    "",  //7
    "Sim, é verdade!",  //8
    "Sra. A: O Sr. B é um elegante cavaleiro!", //9
    "", //10
    "", //11
    "correcto!", //12
    "", //13
    "", //14
    "", //15
    "", //16
    "C, eu amo-te !", //17
    "", //18
    "", //19
    "C, eu amo-te !" //20
];

const falasEsquerda2 = [
    "", //0
    "", //1
    "Bem, vindos!",  //2
    "Nem sempre dizemos a verdade...", //3
    "Escudeiros só casam com cavaleiros!",  //4
    "Tu não és uma Normal !",  //5
    " ......  ",  //6
    "",  //7
    "Somos ambos Normais",  //8
    "",  //9
    "Sr. A:  Sim, o Sr. B é cavaleiro...", //10
    "",  //11
    "Assim é", //12
    "", //13
    " Se eu sou cavaleira, então tu não me mentes!",  //14
    "", //15
    "", //16
    "", //17
    "A, eu não te amo !", //18
    "", //19
    "A, eu não te amo !" //20
];

const falasDireita1 = [
    "", //0
    "", //1
    "",  //2
    "",  //3
    "",  //4
    "",  //5
    "", //6
    "", //7
    "", //8
    "",  //9
    ` Sra. B: É verdade, ele é o meu cavaleiro!`, //10
    "", //11
    "Sou Normal", //12
    "", //13
    "", //14
    "", //15
    "", //16
    "", //17
    "", //18
    "B, eu amo-te !", //19
    "B, eu amo-te !" //20
    
];

const falasDireita2 = [
    "", //0
    "",//1
    "", //2
    "",  //3
    "",  //4
    "",  //5
    "", //6
    "", //7
    "", //8
    "", //9
    "", //10
    "", //11
    "Somos todos Normais", //12
    "", //13
    "", //14
    "", //15
    "", //16
    "", //17
    "", //18
    "" //19

];


let indiceAtual = 0;

function atualizarConteudo() {
    // Altera fundo
    const fundo = fundos[indiceAtual] || "";
    document.body.style.backgroundImage = fundo ? `url('${fundo}')` : "none";

    // Texto no container
    const textoEl = document.getElementById("texto-container");
    textoEl.innerHTML = textos[indiceAtual] || "";

    // Imagem do container
    const imagemEl = document.getElementById("imagem");
    const caminhoImagem = imagens[indiceAtual] || "";
    if (caminhoImagem.trim() !== "") {
        imagemEl.style.display = "block";
        imagemEl.src = caminhoImagem;
    } else {
        imagemEl.style.display = "none";
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

    // Mostra blocos apenas no índice 8
    //const mostrarBlocos = indiceAtual === 8;

    //document.getElementById("blocos-container").style.display = mostrarBlocos ? "block" : "none";
    //document.getElementById("cenario").style.display = mostrarBlocos ? "flex" : "none";
    //document.getElementById("verificar").style.display = mostrarBlocos ? "inline-block" : "none";

    const mostrarBlocos = indiceAtual === 7;

    const blocosEl = document.getElementById("blocos-container");
    const cenarioEl = document.getElementById("cenario");
    const verificarBtn = document.getElementById("verificar");

    if (blocosEl) blocosEl.style.display = mostrarBlocos ? "block" : "none";
    if (cenarioEl) cenarioEl.style.display = mostrarBlocos ? "flex" : "none";
    if (verificarBtn) verificarBtn.style.display = mostrarBlocos ? "inline-block" : "none";

    if (mostrarBlocos && typeof adicionarBlocos === "function") {
        //adicionarBlocos(); // <-- esta linha ativa os blocos arrastáveis
    }
    


    atualizarImagem("personagemSmullyan", personagensSmullyan[indiceAtual]);

    atualizarImagem("personagemEsquerda1", personagensEsquerda1[indiceAtual]);
    atualizarImagem("personagemEsquerda2", personagensEsquerda2[indiceAtual]);
    atualizarImagem("personagemDireita1", personagensDireita1[indiceAtual]);
    atualizarImagem("personagemDireita2", personagensDireita2[indiceAtual]);

    // Balões de fala
    const atualizarTexto = (id, texto) => {
        const el = document.getElementById(id);
        if (!texto || texto.trim() === "") {
            el.style.display = "none"; // Esconde se vazio ou só espaços
        } else {
            el.textContent = texto;
            el.style.display = "block"; // Mostra normalmente quando existe fala
        }

    };
    
    atualizarTexto("falaSmullyan", falasSmullyan[indiceAtual]);

    atualizarTexto("falaEsquerda1", falasEsquerda1[indiceAtual]);
    atualizarTexto("falaEsquerda2", falasEsquerda2[indiceAtual]);
    atualizarTexto("falaDireita1", falasDireita1[indiceAtual]);
    atualizarTexto("falaDireita2", falasDireita2[indiceAtual]);

    const visor = document.getElementById("indice-visor");
    if (visor) {
      visor.textContent = `Etapa: ${indiceAtual}`;
    }

    // CHAMA OS QUESTIONÁRIOS CONSOANTE O ÍNDICE, deve-se acrescentar if statments para novos questionários 1/3
    if (indiceAtual === 7) {
        iniciarQuestionario("situacao20");
      } else if (indiceAtual === 11) {
        iniciarQuestionario("situacao21");
      } else if (indiceAtual === 15) {
        iniciarQuestionario("situacao22");
      } 

      const indicesComSlots = [7, 11, 15]; // actualizar onde aparecem os slots na linha de história 2/3

      if (!indicesComSlots.includes(indiceAtual)) {
        document.querySelectorAll(".slot").forEach(el => el.remove());
        const blocosContainer = document.getElementById("blocos-container");
        if (blocosContainer) blocosContainer.innerHTML = "";
      }
      
     
    // O valor de indiceAtual é o dos questionários ?, actualizar em conformidade com o 2/3 , 3/3
    document.getElementById("verificar").style.display = [7, 11, 15].includes(indiceAtual)
      ? "block"
      : "none";

      
    
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