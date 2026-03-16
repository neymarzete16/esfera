const sphere = document.querySelector('.sphere');

function getRandomColor() {
    // Gera cores RGB aleatórias
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

sphere.addEventListener('mouseenter', () => {
    sphere.style.backgroundColor = getRandomColor();
});