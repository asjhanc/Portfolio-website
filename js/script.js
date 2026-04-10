document.addEventListener('DOMContentLoaded', function() {
    // 1. Efecto Máquina de Escribir (Más veloz y dinámico)
    const words = [
        "interfaces interactivas.", 
        "arquitecturas escalables.",
        "soluciones eficientes.",
        "microservicios ágiles."
    ];
    let i = 0; let j = 0;
    let isDeleting = false;
    const typewriterElement = document.querySelector('.typewriter');

    function type() {
        if (!typewriterElement) return;
        const currentWord = words[i];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, j--);
        } else {
            typewriterElement.textContent = currentWord.substring(0, j++);
        }

        if (!isDeleting && j === currentWord.length + 1) {
            isDeleting = true;
            setTimeout(type, 1500); // Pausa al completar la frase
            return;
        }

        if (isDeleting && j === -1) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(type, 300); // Pausa antes de la nueva frase
            return;
        }

        const typingSpeed = isDeleting ? 30 : 80;
        setTimeout(type, typingSpeed);
    }
    type();

    // 2. Animaciones de Scroll (Aparición fluida)
    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 120; 

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Ejecutar al inicio por si ya están en pantalla
});