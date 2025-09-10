// Efecto de Máquina de Escribir (Typewriter)
const words = ["experiencias intuitivas.", "soluciones creativas.", "aplicaciones web modernas."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typewriterElement = document.querySelector('.typewriter');

function type() {
    currentWord = words[i];
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, j--);
    } else {
        typewriterElement.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        // Pausa al final de la palabra
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length; // Pasa a la siguiente palabra
    }
    
    // Velocidad de escritura
    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
}

// Inicia el efecto cuando la página carga
document.addEventListener('DOMContentLoaded', type);