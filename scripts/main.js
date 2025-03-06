// Função para verificar as respostas
/*O que esse código faz?
Define as respostas corretas para cada quiz.

Verifica as respostas selecionadas pelo usuário.

Conta quantas respostas estão corretas.

Mostra uma mensagem de resultado (parabéns ou tente novamente).

*/
function verificarRespostas(quizId) {
    const respostasCorretas = {
        'quiz-navegador': { q1: 'a', q2: 'b' }, // Respostas corretas do Quiz Navegador
        'quiz-nuvem': { q1: 'b', q2: 'a' }      // Respostas corretas do Quiz Nuvem
    };

    const form = document.getElementById(quizId);
    const resultado = document.getElementById(`resultado-${quizId.split('-')[1]}`);
    let acertos = 0;

    // Verifica cada pergunta
    for (let i = 1; i <= 2; i++) {
        const respostaUsuario = form.querySelector(`input[name="q${i}"]:checked`);
        if (respostaUsuario && respostaUsuario.value === respostasCorretas[quizId][`q${i}`]) {
            acertos++;
        }
    }

    // Mostra o resultado
    if (acertos === 2) {
        resultado.textContent = "Parabéns! Você acertou todas as respostas! 🎉";
        resultado.style.color = "green";
    } else {
        resultado.textContent = `Você acertou ${acertos} de 2 respostas. Tente novamente! 😊`;
        resultado.style.color = "red";
    }
}



// Função para verificar se a seção está visível na tela
function verificarVisibilidade() {
    const secoes = document.querySelectorAll('section');

    secoes.forEach(secao => {
        const rect = secao.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) { // 80% da altura da tela
            secao.classList.add('visible');
        }
    });
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', verificarVisibilidade);

// Verifica a visibilidade ao carregar a página
document.addEventListener('DOMContentLoaded', verificarVisibilidade);