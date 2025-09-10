const words = ["experiencias intuitivas.", "soluciones creativas.", "aplicaciones web modernas."];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const typewriterElement = document.querySelector('.typewriter');

function type() {
    currentWord = words[is];
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, j--);
    } else {
        typewriterElement.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {

        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }
    
    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', function() {
    const words = ["experiencias intuitivas.", "soluciones creativas.", "aplicaciones web modernas."];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;
    const typewriterElement = document.querySelector('.typewriter');

    function type() {
        if (!typewriterElement) {
            return;
        }

        currentWord = words[i];
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

        const typingSpeed = isDeleting ? 100 : 200;
        setTimeout(type, typingSpeed);
    }

    type();
});