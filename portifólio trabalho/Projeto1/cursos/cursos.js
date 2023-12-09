// Função para solicitar feedback
function askFeedback() {
    var feedback = prompt("Qual nota você daria para esta videoaula? (0 a 10)");

    alert("Obrigado pelo seu feedback! Nota: " + feedback);
}

// Função para voltar para o menu principal
function goBackToMenu() {
    window.location.href = "../menu principal/menu.html";
}
