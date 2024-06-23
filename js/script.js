// Obtiene el elemento del cubo por su ID
const cube = document.getElementById('cube');

// Variables para controlar el estado de arrastre y las posiciones iniciales
let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

// Evento para iniciar el arrastre
cube.addEventListener('mousedown', (e) => {
    isDragging = true; 
    startX = e.clientX;
    startY = e.clientY;
    cube.style.cursor = 'grabbing'; 
});

// Evento para controlar el movimiento del ratón durante el arrastre
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startX; 
        const deltaY = e.clientY - startY; 
        currentX += deltaX; 
        currentY -= deltaY; 
        cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`; 
        startX = e.clientX; 
        startY = e.clientY; 
    }
});

// Evento para finalizar el arrastre
document.addEventListener('mouseup', () => {
    isDragging = false; 
    cube.style.cursor = 'grab'; 
});
