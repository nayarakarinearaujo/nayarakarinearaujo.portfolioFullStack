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
