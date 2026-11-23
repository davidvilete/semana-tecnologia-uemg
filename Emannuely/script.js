// Funcionalidade 1 - Boas-vindas
let nome = prompt("Digite o seu nome:", "");

if (nome != null && nome != "") {
    alert("Bem-vindo à Semana de Tecnologia, " + nome + "!");
} else {
    alert("Bem-vindo à Semana de Tecnologia, Visitante!");
}

// Funcionalidade 2 - Alteração da cor de fundo
if (confirm("Deseja alterar a cor de fundo da página?")) {
    let cor = prompt("Escolha uma das opções: blue, red ou green", "");

    if (cor == "blue" || cor == "red" || cor == "green") {
        document.body.style.backgroundColor = cor;
    } else {
        alert("Cor inválida! A cor padrão será mantida.");
    }
}