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
