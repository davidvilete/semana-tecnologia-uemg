// ===== Função que aplica a cor escolhida =====
// Aplica a cor no fundo da página (requisito) e ativa os tons dessa cor no CSS.
function aplicarCor(cor) {
  document.body.style.backgroundColor = cor;
  document.body.className = 'tema-' + cor;
}

// ===== Função que pergunta se o visitante quer trocar a cor =====
function perguntarCor() {
  if (confirm('Deseja alterar a cor de fundo da página?')) {
    let cor = prompt('Escolha uma cor: blue, red ou green', '');

    // Se cancelar o prompt (null), nada muda e a cor atual é mantida
    if (cor !== null) {
      cor = cor.trim().toLowerCase();

      if (cor === 'blue' || cor === 'red' || cor === 'green') {
        aplicarCor(cor);
      } else {
        alert('Cor inválida. Será mantida a cor atual da página.');
      }
    }
  }
  // Se cancelar o confirm, a cor atual é mantida (na abertura, o lightgray do CSS).
}


// ===== Funcionalidade 1 - Boas-vindas =====
let nome = prompt('Qual é o seu nome?', '');

// Se o visitante cancelar (null) ou deixar vazio, usa um nome padrão
if (nome === null || nome.trim() === '') {
  nome = 'visitante';
}

alert('Bem-vindo à Semana de Tecnologia, ' + nome + '!');


// ===== Funcionalidade 2 - Alteração da cor de fundo =====
perguntarCor();

// O botão "Personalizar cor" do cabeçalho permite trocar a cor de novo a qualquer momento
document.getElementById('botao-cor').addEventListener('click', perguntarCor);
