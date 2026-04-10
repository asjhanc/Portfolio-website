document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efecto Máquina de Escribir Fluido
    const words = [
        "experiencias únicas.", 
        "arquitecturas escalables.",
        "soluciones eficientes.",
        "interfaces modernas."
    ];
    let i = 0, j = 0, isDeleting = false;
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
            setTimeout(type, 400);
            return;
        }

        setTimeout(type, isDeleting ? 40 : 100);
    }
    type();

    // 2. Intersection Observer para Animaciones "Reveal" ultra suaves
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo anima una vez para no saturar
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
    });

    // 3. Efecto Parallax sutil en los blobs de fondo al mover el mouse
    const blobs = document.querySelectorAll('.blob');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xOffset = (window.innerWidth / 2 - e.pageX) / speed;
            const yOffset = (window.innerHeight / 2 - e.pageY) / speed;
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });
});