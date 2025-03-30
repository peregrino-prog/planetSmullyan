// Drag and drop
document.querySelectorAll('.bloco').forEach(bloco => {
    bloco.addEventListener('dragstart', e => {
      e.dataTransfer.setData("tipo", bloco.dataset.tipo);
    });
  });
  
  document.querySelectorAll('.slot').forEach(slot => {
    slot.addEventListener('dragover', e => e.preventDefault());
  
    slot.addEventListener('drop', e => {
      e.preventDefault();
      const tipo = e.dataTransfer.getData("tipo");
      slot.textContent = tipo;
      slot.dataset.selecionado = tipo;
    });
  });
  
  // Verificação da resposta
  document.getElementById('verificar').addEventListener('click', () => {
    const slots = document.querySelectorAll('.slot');
    let acertouTudo = true;
  
    slots.forEach(slot => {
      const certo = slot.dataset.resposta;
      const escolhido = slot.dataset.selecionado;
      if (certo !== escolhido) {
        acertouTudo = false;
      }
    });
  
    if (acertouTudo) {
      alert("🎉 Acertaste tudo!");
    } else {
      alert("❌ Há erros. Tenta novamente.");
    }
  });
  function adicionarBlocos() {
    const container = document.getElementById("blocos-container");
    container.innerHTML = ""; // limpa blocos anteriores
    container.style.display = "flex"; // mostra os blocos
  
    const blocos = [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      { texto: "Normal", tipo: "normal" }
    ];
  
    blocos.forEach(b => {
      const bloco = document.createElement("div");
      bloco.className = "bloco";
      bloco.textContent = b.texto;
      bloco.dataset.tipo = b.tipo;
      bloco.draggable = true;
  
      bloco.addEventListener("dragstart", e => {
        e.dataTransfer.setData("tipo", b.tipo);
      });
  
      container.appendChild(bloco);
    });
  
    // mostrar cenário e botão
    document.getElementById("cenario").style.display = "flex";
    document.getElementById("verificar").style.display = "inline-block";
  
    window.onload = adicionarBlocos;

  }
  