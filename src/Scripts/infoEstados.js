document.addEventListener("DOMContentLoaded", () => {
    const botoesEstado = document.querySelectorAll(".btn-estado");
    const conteudosEstado = document.querySelectorAll(".conteudo-estado");
    const cardsCidade = document.querySelectorAll(".card-cidade");
    const paineisDetalhes = document.querySelectorAll(".detalhes-cidade-container");

    // Lógica 1: Troca de Estado
    botoesEstado.forEach(botao => {
        botao.addEventListener("click", () => {
            // Remove ativo de todos os botões e estados
            botoesEstado.forEach(b => b.classList.remove("active"));
            conteudosEstado.forEach(c => c.classList.remove("active"));

            // Ativa o botão atual
            botao.classList.add("active");
            
            // Ativa o bloco do estado correspondente
            const estadoAlvo = botao.getAttribute("data-state");
            document.getElementById(`estado-${estadoAlvo}`).classList.add("active");
        });
    });

    // Lógica 2: Troca de Cidade (Abre o card de detalhes)
    cardsCidade.forEach(card => {
        card.addEventListener("click", () => {
            // Remove destaque visual do card antigo do mesmo bloco
            card.parentElement.querySelectorAll(".card-cidade").forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            // Oculta todos os painéis de detalhes inferiores
            paineisDetalhes.forEach(painel => painel.classList.remove("active"));

            // Pega a cidade clicada e exibe o painel correspondente
            const cidadeAlvo = card.getAttribute("data-city");
            const painelAlvo = document.getElementById(`detalhes-${cidadeAlvo}`);
            
            if (painelAlvo) {
                painelAlvo.classList.add("active");
            }
        });
    });
});
