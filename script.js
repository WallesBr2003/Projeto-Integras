// Seleciona todos os elementos de setor
const setores = document.querySelectorAll('.setor');

// Itera sobre cada setor para adicionar eventos de mouseover e mouseout
setores.forEach(setor => {
    // Evento para quando o mouse passa por cima do setor
    setor.addEventListener('mouseover', () => {
        const setorName = setor.getAttribute('data-setor');
        const setorDescription = setor.getAttribute('data-description');
        
        document.getElementById('infoTitle').textContent = setorName;
        document.getElementById('infoDescription').textContent = setorDescription;

        // Altera a cor do setor temporariamente
        setor.style.backgroundColor = '#ffdd57';
    });

    // Evento para quando o mouse sai do setor
    setor.addEventListener('mouseout', () => {
        // Restaura o título e a descrição padrão do painel de informações
        document.getElementById('infoTitle').textContent = 'Passe o mouse sobre um Setor';
        document.getElementById('infoDescription').textContent = 'Informações detalhadas sobre o setor aparecerão aqui.';

        // Restaura a cor original do setor
        setor.style.backgroundColor = '#3498db';
    });
});
