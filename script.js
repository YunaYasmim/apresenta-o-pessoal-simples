// JavaScript para interatividade
document.addEventListener('DOMContentLoaded', function () {
    // Atualizar o ano no footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Botão de contato
    document.getElementById('contact-btn').addEventListener('click', function () {
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    });

    // Exemplo de manipulação de conteúdo
    setTimeout(function () {
        const skillsSection = document.getElementById('skills');
        let isHidden = false;

        document.getElementById('about').addEventListener('click', function () {
            if (isHidden) {
                skillsSection.style.display = 'block';
                document.getElementById('about-content').textContent =
                    'Sou um apaixonado por tecnologia e desenvolvimento web, com experiência em criar soluções digitais intuitivas e eficientes. Adoro aprender novas tecnologias e compartilhar conhecimento.';
            } else {
                skillsSection.style.display = 'none';
                document.getElementById('about-content').textContent =
                    'Clique novamente para mostrar minhas habilidades!';
            }
            isHidden = !isHidden;
        });
    }, 3000);
});
