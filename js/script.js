// Obtiene el elemento del cubo por su ID
const cube = document.getElementById('cube');

// Variables para controlar el estado de arrastre y las posiciones iniciales
let isDragging = false;
let startX, startY;
let currentX = 0, currentY = 0;

// Evento para iniciar el arrastre
cube.addEventListener('mousedown', (e) => {
    isDragging = true; // Activa el estado de arrastre
    startX = e.clientX; // Guarda la posición inicial en X
    startY = e.clientY; // Guarda la posición inicial en Y
    cube.style.cursor = 'grabbing'; // Cambia el cursor a mano cerrada
});

// Evento para controlar el movimiento del ratón durante el arrastre
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const deltaX = e.clientX - startX; // Calcula la diferencia en X
        const deltaY = e.clientY - startY; // Calcula la diferencia en Y
        currentX += deltaX; // Actualiza la rotación actual en X
        currentY -= deltaY; // Actualiza la rotación actual en Y (invertido para control intuitivo)
        cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`; // Aplica la transformación
        startX = e.clientX; // Actualiza la posición inicial en X
        startY = e.clientY; // Actualiza la posición inicial en Y
    }
});

// Evento para finalizar el arrastre
document.addEventListener('mouseup', () => {
    isDragging = false; // Desactiva el estado de arrastre
    cube.style.cursor = 'grab'; // Cambia el cursor a mano abierta
});
