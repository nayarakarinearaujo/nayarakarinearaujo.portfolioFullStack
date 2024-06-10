document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('click', () => {
            // Verifica se a descrição do projeto está visível
            const projectDetails = project.querySelector('.project-details');
            const isVisible = projectDetails.style.display === 'block';

            // Oculta todas as descrições de projeto antes de mostrar a selecionada
            projects.forEach(proj => {
                proj.querySelector('.project-details').style.display = 'none';
            });

            // Se a descrição do projeto estiver visível, oculta-a; caso contrário, exibe-a
            projectDetails.style.display = isVisible ? 'none' : 'block';
        });
    });
});

function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    menu.classList.toggle('active');
    
    if (menu.classList.contains('active')) {
        hamburger.style.display = 'none'; // Esconde o ícone de hambúrguer
    } else {
        hamburger.style.display = 'block'; // Mostra o ícone de hambúrguer
    }
}

// Classe responsável por lidar com o formulário de contato
class FormHandler {
    constructor() {
        this.email = "nayarakarine.araujo@gmail.com"; // Seu email para o formulário
        this.form = document.getElementById("contact-form"); // Obtém o formulário de contato
        this.form.addEventListener("submit", this.handleFormSubmit.bind(this)); // Adiciona um ouvinte de evento para o envio do formulário
    }

    // Método para lidar com o envio do formulário
    handleFormSubmit(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Obtém os valores dos campos do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Constrói a mensagem a ser enviada para o email
        const emailMessage = `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`;

        // Envie a mensagem para o seu email
        this.sendEmail(emailMessage);

        // Limpa os valores dos campos do formulário após o envio
        this.clearFormFields();
    }

    // Método para enviar um email
    sendEmail(message) {
        // Implemente a lógica para enviar um email
        // Aqui você pode usar uma API de envio de email ou serviço semelhante
        // Por exemplo, você pode usar o serviço Formspree ou outro serviço de email

        // Exemplo com o serviço Formspree
        const form = new FormData();
        form.append("message", message);

        fetch("https://formspree.io/f/meqyyezp", {
            method: "POST",
            body: form
        })
        .then(response => {
            if (response.ok) {
                alert("Mensagem enviada com sucesso!"); // Exibe a mensagem de sucesso
            } else {
                throw new Error("Erro ao enviar a mensagem.");
            }
        })
        .catch(error => {
            console.error("Erro:", error);
            alert("Mensagem enviada com sucesso!");
        });
    }

    // Método para limpar os valores dos campos do formulário
    clearFormFields() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    }
}

// Cria uma instância da classe FormHandler quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    new FormHandler();
});



