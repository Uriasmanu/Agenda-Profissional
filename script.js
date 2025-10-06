// Função para alternar entre telas
function showScreen(screenId) {
    // Esconde todas as telas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Mostra a tela desejada
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
}

// Função para acordeão
function toggleAccordion(button) {
    const item = button.closest('.accordion-item');
    const content = item.querySelector('.accordion-content');
    const icon = button.querySelector('.accordion-icon');
    
    item.classList.toggle('active');
    
    if (item.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add('rotate-90');
    } else {
        content.style.maxHeight = "0";
        icon.classList.remove('rotate-90');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Mostra a tela de login por padrão
    showScreen('screen-login');
    
    // Adiciona event listeners para acordeões
    document.querySelectorAll('.accordion-toggle').forEach(button => {
        button.addEventListener('click', function() {
            toggleAccordion(this);
        });
    });
});