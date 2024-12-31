document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const number4 = document.getElementById('number4');
        const number5 = document.getElementById('number5');
        const message = document.getElementById('message');

        // Faire voler le 4
        number4.classList.add('fly-away');

        // Après l'animation du 4
        setTimeout(() => {
            number4.style.display = 'none';
            number5.style.display = 'inline-block';
            number5.classList.add('drop-in');
            
            // Attendre que le 5 soit descendu avant d'afficher le message
            setTimeout(() => {
                message.style.display = 'block';
                // Ajouter des particules pour plus d'effet
                createFirework(window.innerWidth / 2, window.innerHeight / 2);
                setTimeout(() => {
                    createFirework(window.innerWidth / 3, window.innerHeight / 2);
                }, 300);
                setTimeout(() => {
                    createFirework(2 * window.innerWidth / 3, window.innerHeight / 2);
                }, 600);
            }, 500);
        }, 1500);
    }, 1000);

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });
});

function createFirework(x, y) {
    const particleCount = 30;
    const colors = ['#FFD700', '#FF69B4', '#4169E1', '#7FFF00'];
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
    container.style.width = '0';
    container.style.height = '0';
    document.body.appendChild(container);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'firework-particle';
        particle.style.width = '8px';
        particle.style.height = '8px';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Calculer une trajectoire aléatoire
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 100 + Math.random() * 100;
        const spread = Math.random() * 0.5 + 0.5; // Facteur d'éparpillement
        
        // Calculer la destination finale avec une tendance vers le bas
        const dx = Math.cos(angle) * velocity * spread;
        const dy = Math.sin(angle) * velocity * spread + 200; // Ajouter une composante vers le bas
        
        particle.style.setProperty('--dx', `${dx}px`);
        particle.style.setProperty('--dy', `${dy}px`);
        
        container.appendChild(particle);
    }
    
    // Nettoyer après l'animation
    setTimeout(() => container.remove(), 2000);
} 