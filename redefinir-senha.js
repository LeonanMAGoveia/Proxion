document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const emailInput = document.getElementById('email');
    const confirmationMessageDiv = document.getElementById('confirmation-message');
    const errorMessageDiv = document.getElementById('error-message');
    const submitButton = forgotPasswordForm.querySelector('button[type="submit"]');

    forgotPasswordForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne envio real do formulário

        const email = emailInput.value.trim();

        // Limpa mensagens anteriores
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.display = 'none';
        confirmationMessageDiv.textContent = '';
        confirmationMessageDiv.style.display = 'none';
        emailInput.style.borderColor = '#ccc';

        // Validação básica
        if (email === '') {
            errorMessageDiv.textContent = 'Por favor, insira seu endereço de e-mail.';
            errorMessageDiv.style.display = 'block';
            emailInput.style.borderColor = '#d93025'; // Vermelho erro
            return;
        }

        // Validação simples de formato de e-mail (pode ser melhorada)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
             errorMessageDiv.textContent = 'Por favor, insira um endereço de e-mail válido.';
             errorMessageDiv.style.display = 'block';
             emailInput.style.borderColor = '#d93025'; // Vermelho erro
             return;
        }

        // --- Simulação do Processo de Envio ---
        console.log(`Simulando envio de redefinição para: ${email}`);

        // Desabilita o botão para evitar cliques múltiplos
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';


        // Simula um tempo de espera (como se estivesse contatando o servidor)
        setTimeout(() => {
            // Exibe a mensagem de confirmação (mesmo que o e-mail não exista, por segurança)
            confirmationMessageDiv.textContent = 'Solicitação recebida. Se seu e-mail estiver cadastrado, você receberá as instruções para redefinir sua senha em breve.';
            confirmationMessageDiv.style.display = 'block';

            // Limpa o campo de e-mail após "enviar"
            // emailInput.value = ''; // Comentei, pode ser melhor manter o email visível

            // Reabilita o botão
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Link de Redefinição';

            // AQUI ENTRARIA A CHAMADA REAL PARA O BACKEND (Ex: usando fetch())
            /*
            fetch('/api/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            })
            .then(response => response.json())
            .then(data => {
                // Lógica baseada na resposta do backend
                confirmationMessageDiv.textContent = data.message; // Mensagem vinda do backend
                confirmationMessageDiv.style.display = 'block';
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar Link de Redefinição';
            })
            .catch(error => {
                console.error('Erro ao solicitar redefinição:', error);
                errorMessageDiv.textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
                errorMessageDiv.style.display = 'block';
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar Link de Redefinição';
            });
            */

        }, 1500); // Espera 1.5 segundos para simular

    });

     // Opcional: Limpar erro ao digitar
    emailInput.addEventListener('input', () => {
        if (emailInput.style.borderColor === 'rgb(217, 48, 37)') { // Verifica se a borda está vermelha
            emailInput.style.borderColor = '#ccc';
            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';
        }
    });

});