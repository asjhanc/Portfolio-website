document.addEventListener('DOMContentLoaded', function() {
    // 1. Efecto Máquina de Escribir (Optimizado)
    const words = [
        "automatización de procesos.", 
        "microservicios eficientes.", 
        "arquitecturas escalables.",
        "soluciones integrales."
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
            setTimeout(type, 2000);
            return;
        }

        if (isDeleting && j === -1) {
            isDeleting = false;
            i = (i + 1) % words.length;
            setTimeout(type, 500);
            return;
        }

        const typingSpeed = isDeleting ? 40 : 100;
        setTimeout(type, typingSpeed);
    }
    type();

    // 2. Animaciones de Scroll (Efecto Reveal para impresionar)
    function revealOnScroll() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // Cuándo aparece el elemento

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    // Disparar una vez al cargar para mostrar el inicio
    revealOnScroll(); 
});