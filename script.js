// Capturando os elementos do HTML através do .getElementById
const inputNota = document.getElementById('inputNota');
const btnCalcular = document.getElementById('btnCalcular');
const cardPrincipal = document.getElementById('card-principal');
const textoResultado = document.getElementById('textoResultado');
const imagemResultado = document.getElementById('imagemResultado');

// Adicionando o evento de clique ao botão
btnCalcular.addEventListener('click', function() {
  const notaNecessaria = parseFloat(inputNota.value);

  // Validação simples do campo
  if (isNaN(notaNecessaria) || notaNecessaria < 0 || notaNecessaria > 10) {
    alert('Por favor, digite uma nota válida entre 0 e 10!');
    return;
  }

  // Limpa classes anteriores do card
  cardPrincipal.className = 'card';

  // Lógica condicional para humor e estilo
  if (notaNecessaria <= 5) {
   
    textoResultado.innerText = 'Aí tá easy. Moggeer de Professores!!! ';
    cardPrincipal.classList.add('tema-facil');
    imagemResultado.src = 'https://i.pinimg.com/736x/d6/d9/17/d6d91758c2b8eac6bbc8241c12fa1153.jpg';
  } 
  else if (notaNecessaria <= 8) {
    
    textoResultado.innerText = 'Ainda dá de recuperar!! Saia do celular, betinha.';
    cardPrincipal.classList.add('tema-medio');
    imagemResultado.src = 'https://i.pinimg.com/736x/15/c1/0d/15c10d4bb231cfc4d57cfc1161cb5230.jpg';
  } 
  else {
    
    textoResultado.innerText = 'Só na reza braba... Tenha fé!!! ';
    cardPrincipal.classList.add('tema-dificil');
    imagemResultado.src = 'https://i.pinimg.com/736x/ef/76/f5/ef76f57191a3399a7992bbbc854fecbb.jpg';
    imagemResultado.src = 'https://i.pinimg.com/736x/2e/74/e3/2e74e334c7ab65b7560503bf11ca2b91.jpg';
  }

  // Exibe a imagem após atribuir a fonte
  imagemResultado.style.display = 'block';
});
