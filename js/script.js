function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Credenciais válidas para teste
    var validEmail = 'admin@admin.com';
    var validPassword = 'admin';

    // Verifica se as credenciais são válidas
    if (email === validEmail && password === validPassword) {
        // Redireciona para a página de dashboard após o login bem-sucedido
        window.location.href = 'dashboard.html'; // Substitua 'dashboard.html' pelo caminho real da sua página de destino
    } else {
        // Exibe uma mensagem de erro
        alert('Credenciais inválidas. Por favor, tente novamente.');
    }
}

// Adiciona um ouvinte de evento para a tecla "Enter" no campo de senha
document.getElementById("password").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        // Chama a função de validação ao pressionar "Enter"
        validateForm();
    }
});
