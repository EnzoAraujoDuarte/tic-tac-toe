
// Array de Padrões de Vitória
let winningPattern = [
    [0, 1, 2],  // Linhas horizontais
    [0, 3, 6],  // Linhas verticais
    [2, 5, 8],  // Linhas diagonais
    [6, 7, 8],  // Linhas horizontais
    [3, 4, 5],  // Linhas verticais
    [1, 4, 7],  // Linhas verticais
    [0, 4, 8],  // Linhas diagonais
    [2, 4, 6],  // Linhas diagonais
  ];
  
  // Jogador 'X' joga primeiro
  let xTurn = true;  // Indica se é a vez do jogador X ou não
  let count = 0;      // Contador de jogadas
  
  // Desabilita todos os botões
  const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
    // habilita o popup
    popupRef.classList.remove("hide");
  };
  
  // Habilita todos os botões (Para Novo Jogo e Reinício)
  const enableButtons = () => {
    btnRef.forEach((element) => {
      element.innerText = "";
      element.disabled = false;
    });
    // desabilita o popup
    popupRef.classList.add("hide");
  };
  
  // Esta função é executada quando um jogador vence
  const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
      msgRef.innerHTML = "&#x1F389; <br> 'X' Venceu";
    } else {
      msgRef.innerHTML = "&#x1F389; <br> 'O' Venceu";
    }
  };
  
  // Função para empate
  const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> Empate";
  };
  
  // Novo Jogo
  newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  });
  restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
  });
  
  // Lógica de Vitória
  const winChecker = () => {
    // Percorre todos os padrões de vitória
    for (let i of winningPattern) {
      let [element1, element2, element3] = [
        btnRef[i[0]].innerText,
        btnRef[i[1]].innerText,
        btnRef[i[2]].innerText,
      ];
      // Verifica se os elementos estão preenchidos
      // Se 3 elementos vazios forem iguais e dariam a vitória
      if (element1 != "" && (element2 != "") & (element3 != "")) {
        if (element1 == element2 && element2 == element3) {
          // Se os 3 botões tiverem os mesmos valores, passa o valor para winFunction
          winFunction(element1);
        }
      }
    }
  };
  
  // Exibe X/O ao clicar
  btnRef.forEach((element) => {
    element.addEventListener("click", () => {
      if (xTurn) {
        xTurn = false;
        // Exibe X
        element.innerText = "X";
        element.disabled = true;
      } else {
        xTurn = true;
        // Exibe O
        element.innerText = "O";
        element.disabled = true;
      }
      // Incrementa o contador a cada clique
      count += 1;
      if (count == 9) {
        drawFunction();
      }
      // Verifica a vitória a cada clique
      winChecker();
    });
  });
  // Habilita os botões e desabilita o popup ao carregar a página
  window.onload = enableButtons;
  