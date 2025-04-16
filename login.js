    // Seleciona os elementos do formulário
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessageDiv = document.getElementById('error-message');
    
    // Adiciona um ouvinte de evento para o envio do formulário
    loginForm.addEventListener('submit', function(event) {
        // Previne o comportamento padrão de envio do formulário (recarregar a página)
        event.preventDefault();
    
        // Pega os valores dos inputs, removendo espaços em branco extras
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
    
        // Limpa mensagens de erro anteriores
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.display = 'none';
        usernameInput.style.borderColor = '#ccc'; // Reseta borda
        passwordInput.style.borderColor = '#ccc'; // Reseta borda
    
    
        // Validação básica: verifica se os campos estão vazios
        let hasError = false;
        if (username === '') {
            errorMessageDiv.textContent = 'Por favor, insira seu usuário.';
            usernameInput.style.borderColor = '#d93025'; // Borda vermelha no erro
            hasError = true;
        }
    
        if (password === '' && !hasError) { // Mostra erro de senha apenas se o usuário já foi preenchido
            errorMessageDiv.textContent = 'Por favor, insira sua senha.';
            passwordInput.style.borderColor = '#d93025'; // Borda vermelha no erro
            hasError = true;
        } else if (password === '') {
             passwordInput.style.borderColor = '#d93025'; // Marca o campo de senha também se ambos estiverem vazios
             hasError = true; // Garante que o erro geral seja exibido se ambos vazios
             if (username === '') {
                  errorMessageDiv.textContent = 'Por favor, preencha usuário e senha.';
             }
        }
    
    
        if(hasError){
            errorMessageDiv.style.display = 'block';
            return; // Interrompe a execução se houver erro
        }
    
    
        // --- Simulação de Login ---
        // Aqui você faria a chamada para o backend para verificar as credenciais.
        // Por enquanto, vamos apenas simular sucesso ou falha.
    
        // Exemplo: Simular um usuário/senha válido
        if (username === "proxion" && password === "senha123") {
            alert("Login bem-sucedido! Redirecionando...");
           
           // Redireciona o navegador para a página dashboard.html
            window.location.href = 'dashboard.html';
        } else {
            // Simular falha
            errorMessageDiv.textContent = 'Usuário ou senha inválidos.';
            errorMessageDiv.style.display = 'block';
            usernameInput.style.borderColor = '#d93025';
            passwordInput.style.borderColor = '#d93025';
        }
    });
    
    // Opcional: Limpar erro ao digitar
    usernameInput.addEventListener('input', () => {
        if (usernameInput.style.borderColor === 'rgb(217, 48, 37)') { // Verifica se a borda está vermelha
             usernameInput.style.borderColor = '#ccc';
             errorMessageDiv.textContent = '';
             errorMessageDiv.style.display = 'none';
        }
    });
    
    passwordInput.addEventListener('input', () => {
        if (passwordInput.style.borderColor === 'rgb(217, 48, 37)') { // Verifica se a borda está vermelha
            passwordInput.style.borderColor = '#ccc';
            errorMessageDiv.textContent = '';
            errorMessageDiv.style.display = 'none';
        }
    });