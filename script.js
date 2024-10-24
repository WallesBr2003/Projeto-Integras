document.querySelectorAll('.setor').forEach(setor => {
    setor.addEventListener('click', () => {
        const setorName = setor.getAttribute('data-setor');
        document.getElementById('infoTitle').textContent = setorName;
        document.getElementById('infoDescription').textContent = `Você clicou no ${setorName}. Aqui você pode adicionar uma descrição mais detalhada sobre esse setor e suas funcionalidades.`;
        
        setor.style.backgroundColor = '#ffdd57';
        setTimeout(() => {
            setor.style.backgroundColor = '#3498db';
        }, 500);
    });
});
